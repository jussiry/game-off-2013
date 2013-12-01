
middle_container = event_score_el = score_el = null

global.goals =
  '00': 30  # top    left - red
  '01': 140 # bottom left - green
  '10': 75  # top right - yellow
  '11': 195 # bottom_right: blue

Meteor.startup ->
  container_el = qs '#middle_container'
  container_el.style.setPos document.body.clientWidth/2 - 80, document.body.clientHeight/2 - 80
  event_score_el = qs '#event_score'
  score_el       = qs '#score'
  # Create goals
  for coord, hue of goals
    goal = document.createElement 'div'
    document.body.insertBefore goal, document.body.firstChild
    size = 1 * game.goal_size
    global.border_size = 20
    goal.style.setProperties
      'border': "solid #{border_size}px hsla(#{hue},100%,50%,0.5)"
      width:  size + 'px'
      height: size + 'px'
      'border-radius': """#{(  coord[0].toInt() & coord[1].toInt() )*size}px
                          #{(  coord[0].toInt() & !coord[1].toInt() )*size}px
                          #{( !coord[0].toInt() & !coord[1].toInt() )*size}px
                          #{( !coord[0].toInt() & coord[1].toInt() )*size}px"""
      #opacity:  0.5
      position: 'fixed'
    goal.style.setPos (coord[1]*game.canvas.width  - coord[1]*size - border_size),
                      (coord[0]*game.canvas.height - coord[0]*size - border_size)

single_score_calculator = (hue_distance, mass)->
  hue_distance = Math.min(100, hue_distance)
  res = ((70 - hue_distance) * (20 + mass / 5))/100
  res /= 2 if res < 0
  res

multi_score_calculator = (hue_distance, mass)->
  hue_distance = Math.min(150, hue_distance)
  res = ((70 - hue_distance) * (20 + mass / 5))/100
  res

show_event_score = (domEl, score)->
  domEl.innerHTML = (ifs score > 0, '+') + spacify parseInt score
  domEl.style.setProperty 'color', if score > 0 then 'hsl(120,100%,57%)' else 'hsl(0,100%,60%)'
  domEl.setAttribute 'class', '' # show

show_total_score = (domEl, score)->
  domEl.innerHTML = spacify Math.round score
  domEl.setAttribute 'class', '' # show

hide_score_timeout = {1:null, 2:null} # player1 and player2
event_score = {1:0, 2:0}

global.add_score = (coords, body)->
  # new score
  expected_hue = goals[coords]
  if game.player2
    # TWO PLAYER SCORING
    goal_vector = new Physics.vector coords[1]*game.canvas.width,  coords[0]*game.canvas.height
    identifier = if game.player1.state.pos.dist(goal_vector) < game.player2.state.pos.dist(goal_vector) \
                 then 1 else 2
    player = game['player'+identifier]
    score_el = if identifier is 2 then qs('#top_left') else qs('#top_right')
    new_score = multi_score_calculator Math.abs( expected_hue - body.options.hue ),
                                       body.options.mass
    event_score[identifier] += new_score
    show_event_score(score_el, event_score[identifier])
    game['score'+identifier] += new_score
    # timeout for hide or final score
    clearTimeout hide_score_timeout[identifier]
    hide_score_timeout[identifier] = setTimeout ->
      event_score[identifier] = 0
      score_el.setAttribute 'class', 'hidden'
      if game.world.getBodies().length is 4 * game.goalies_per_goal + 1 + !!game.player2
        qs('#top_left').style.color = null
        qs('#top_right').style.color = null
        show_total_score(qs('#top_right'), game.score1)
        show_total_score(qs('#top_left'), game.score2)
        show_total_score(qs('#score'), game.score1+game.score2)
        # round completed!
        setTimeout ->
          qs('#restart').innerHTML = "(m)ore?"
          qs('#restart').setAttribute 'class', ''
        , 2000
    , 1500
  else
    # ONE PLAYER SCORING
    # event score
    new_score = single_score_calculator Math.abs( expected_hue - body.options.hue ),
                                        body.options.mass
    event_score[1] += new_score
    show_event_score(event_score_el, event_score[1])
    # game score
    game.score1 += new_score
    # hide score
    clearTimeout hide_score_timeout[1]
    hide_score_timeout[1] = setTimeout ->
      event_score[1] = 0
      event_score_el.setAttribute 'class', 'hidden'
      if game.world.getBodies().length is 4 * game.goalies_per_goal + 1 + !!game.player2
        show_total_score(score_el, game.score1)
      #else
        # round completed!
        localStorage.round = game.round += 1
        setTimeout ->
          qs('#restart').innerHTML = "(m)ore?"
          qs('#restart').setAttribute 'class', ''
        , 2000
    , 1500


Physics.behavior 'scoring', ( parent )->
  init: (options)->
    parent.init.call(this, options) # not needed?
  behave: ( data )->
    for body in data.bodies
      continue if not body? or body.fixed
      if body.options.player #body is game.player or body is game.player2
        "SLOW DOWN PLAYER WHEN IN GOAL"
        return
      {canvas,goal_size} = game
      if body.state.pos._[0] < goal_size
        if body.state.pos._[1] < goal_size
          # top left
          data.scope.removeBody(body)
          add_score '00', body
        else if body.state.pos._[1] > canvas.height - goal_size
          # bottom left
          data.scope.removeBody(body)
          add_score '10', body
      else if body.state.pos._[0] > canvas.width - goal_size
        if body.state.pos._[1] < goal_size
          # top right
          data.scope.removeBody(body)
          add_score '01', body
        else if body.state.pos._[1] > canvas.height - goal_size
          # bottom right
          data.scope.removeBody(body)
          add_score '11', body
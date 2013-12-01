
do ->
  radius_divider = 31
  global.radius2hue = (radius)-> 360 * radius / radius_divider
  global.hue2radius =    (hue)-> hue * radius_divider / 360

global.player_color = (shadow)-> if shadow then 0x666666 else 0xffffff
global.player_mass  = (radius, shadow)->
  m = 3 * Math.PI * radius*radius
  m *= -1 if shadow
  m

global.add_ball = -> # use call method to call this func
  throw "use add_ball.call(properties)" if @ is global
  @x ?= Physics.util.random(game.goal_size, canvas.width  - game.goal_size)
  @y ?= Physics.util.random(game.goal_size, canvas.height - game.goal_size)
  @radius ?= r = @radius or mass2radius(@mass)
  @restitution ?= @resititution or 0.5
  @hue   ?= hue = @hue or radius2hue(r)
  @color ?= hsl hue, 100, 50
  #@pupil_color ?= hsl Math.random()*360, 100, 50
  balls.push ball = Physics.body (@shape or 'circle'), @
  world.add( ball )
  ball


Meteor.startup ->

  stage = global.stage = new PIXI.Stage(0x001100)
  global.canvas = qs('#root_canvas')
  ui.init()
  renderer = new PIXI.CanvasRenderer canvas.width, canvas.height, canvas
  g = global.g = new PIXI.Graphics
  stage.addChild(g)


  world = global.world = new Physics.world
  # add things to world
  edgeBounce = Physics.behavior 'edge-collision-detection',
    aabb:        Physics.aabb 0, 0, canvas.width, canvas.height
    restitution: 0.99
    cof:         0.99
  world.add( edgeBounce )
  world.add( Physics.behavior('body-impulse-response') )
  world.add Physics.behavior 'newtonian',
    strength:  s = 0.00015
    tolerance: 100000*s

  world.add( Physics.behavior('sweep-prune') )
  world.add( Physics.behavior('body-collision-detection', { checkAll: false }) )
  world.add( Physics.behavior('scoring') )

  global.game =
    # set in intit: round balls
    running: false
    score1:  null
    score2: null
    goal_size: 90
    goalies_per_goal: 1 #4

    canvas:   canvas   # pixi
    renderer: renderer # pixi
    world: world       # phjs

    init: (multiplayer)->
      # init settings
      game.running = true
      game.round = (parseInt localStorage.round) or 1
      ga? 'send', 'event', 'round_'+game.round
      game.balls_n = if (na = location.pathname.match /\d+/) then na[0] else (5 * game.round)
      # reset world
      for body in world.getBodies()
        world.removeBody body
      game.score1 = game.score2 = 0
      unless multiplayer
        game.player2 = null

      # init UI
      ui.init(multiplayer)

      balls = global.balls = []

      for i in [0...game.balls_n]
        add_ball.call
          mass: 10 + 1000 * Math.pow Math.random(), 5 # 0.05
      game.init_player1()
      game.init_player2() if multiplayer
      # GOAL REPULSION
      dist_from_corner = 0.8 * game.goal_size
      half = Math.PI/2
      for coord, hue of goals
        add_ball.call
          x: coord[1]*game.canvas.width
          y: coord[0]*game.canvas.height
          shape: 'point'
          mass: -5000
          fixed: true
          radius: 10
          color: 0x00ff00

      #world.add( balls )

      unless Physics.util.ticker.isActive()

        Physics.util.ticker.subscribe (time, dt)->
          player1.accelerate(player1.options.move)
          player2?.accelerate(player2?.options.move)
          # PHYSICS
          if world.isPaused()
            return
          world.step( time )

          # maks sure shadow player dont fly away
          if (p = game.player1).mass < 0 or (p = game.player2)
            pos = p.state.pos._
            if (left = pos[0] < 0) or pos[0] > game.canvas.width
              pos[0] = if left then 0 else game.canvas.width
              p.state.old.pos._[0] = pos[0]
            else if (up = pos[1] < 0) or pos[1] > game.canvas.height
              pos[1] = if up then 0 else game.canvas.height
              p.state.old.pos._[1] = pos[1]
            #if      pos[1] < 0                  then pos[1] = 0
            #else if pos[1] > game.canvas.height then pos[1] = game.canvas.height
          # player move
          #player.accelerate(player.state.vel.clone().negate().mult(0.001))
          # reset repulse action
          #if player.mass isnt player.options.orig_mass and Date.now() - player.repulse_time > 100
          #  player.mass = player.options.orig_mass

          # - GRAPHICS -
          g.clear()
          # BALL BODY
          for body in world.getBodies() #world._bodies
            pos    = body.state.pos
            g.beginFill(body.options.color,1)
            g.drawCircle(pos._[0], pos._[1], body.geometry.radius)
            g.endFill()
          # PUPIL
          pupil_color = null
          for body in world.getBodies()
            if body.options.radius > 5
              # color
              if body.options.pupil_color?
                g.beginFill(pupil_color=body.options.pupil_color, 0.5)
              else if pupil_color isnt 0
                g.beginFill(pupil_color=0x000000,0.4)
              # posiotion
              {pos,angular} = body.state
              radius = body.geometry.radius #body.options.radius
              g.drawCircle(pos._[0] + 0.4*radius * Math.cos( angular.pos ),
                           pos._[1] + 0.4*radius * Math.sin( angular.pos ), radius/3)
          g.endFill()

          renderer.render(stage)

        Physics.util.ticker.start()
    init_player1:->
      global.player1 = game.player1 = add_ball.call
        radius: r = 20
        shadow: s = false
        mass: m = player_mass(r, s) # 2*
        orig_mass: m
        color: player_color(s)
        pupil_color: 0x0000ff
        player: true
        move: new Physics.vector
        pressed_dirs: {}
    init_player2: ->
      global.player2 = game.player2 = add_ball.call
        radius: r = 20
        shadow: s = false #player1.options.shadow # not
        mass: m = player_mass(r, s)
        orig_mass: m
        color: player_color(s)
        pupil_color: 0xff0000
        player: true
        move: new Physics.vector
        pressed_dirs: {}
      ga? 'send', 'event', '2nd_player'

  qs('#restart').onclick = game.init

  intro.show()


Template.setup.rendered = ->
  `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-194434-9', 'meteor.com');
    ga('send', 'pageview');
  `
  return

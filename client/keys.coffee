

Meteor.startup ->
  player_keys =
    38: 'up' #
    39: 'right' #
    40: 'down' #
    37: 'left' #
  player2_keys =
    87: 'up'
    68: 'right'
    83: 'down'
    65: 'left'
  shadow_keys = [16,17,18] # ctrl, shift, alt
  # PLAYER MOVEMENT
  move_strength = 0.0008
  STATE_UP   = 0
  STATE_DOWN = 1
  window.onkeydown = (ev)-> # .addEventListener 'onkeydown', (ev)->
    k = ev.keyCode
    if intro.visible
      intro.hide()
      if game.running
      then game.world.unpause()
      else game.init(!!player2_keys[k])
      ev.preventDefault()
      return false
    if process_move_keys STATE_DOWN, k
      ev.preventDefault()
      return false
    shadow(true,ev) if shadow_keys.indexOf(k) isnt -1
  window.onkeyup  = (ev)->
    k = ev.keyCode
    if process_move_keys STATE_UP, k
      ev.preventDefault()
      return false
    if shadow_keys.indexOf(k) isnt -1
      shadow(false,ev)
      return false
    special_keys ev
  shadow = (state,ev)->
    if not game.player2
      player = game.player1
    else
      player = if ev.keyLocation is 2
      then game.player1
      else game.player2
    player.options.shadow = state
    player.mass = player_mass player.options.radius, player.options.shadow
    player.options.color = player_color(player.options.shadow)
  process_move_keys = (state,keyCode)->
    if player_keys[keyCode]
      already_pressed = game.player1.options.pressed_dirs[ dir_s=player_keys[keyCode] ]
      return true if state is STATE_DOWN and already_pressed or state is STATE_UP and not already_pressed
      move_player game.player1, dir_s, if state is STATE_DOWN then 1 else -1
      true # stop event
    else if player2_keys[keyCode]
      game.init(true) unless game.player2?
      already_pressed = game.player2.options.pressed_dirs[ dir_s=player2_keys[keyCode] ]
      return true if state is STATE_DOWN and already_pressed or state is STATE_UP and not already_pressed
      move_player game.player2, dir_s, if state is STATE_DOWN then 1 else -1
      true
    else return false # continue event
  move_player = (player, dir_s, start_or_stop)->
    #player.options.move.add(x*start_or_stop, y*start_or_stop)
    switch dir_s
      when 'up'    then player.options.move.add(0, -move_strength*start_or_stop)
      when 'down'  then player.options.move.add(0, move_strength*start_or_stop)
      when 'left'  then player.options.move.add(-move_strength*start_or_stop, 0)
      when 'right' then player.options.move.add(move_strength*start_or_stop,  0)
      else return true # not movement; continue to special keys
    player.options.pressed_dirs[dir_s] = if start_or_stop is -1 then false else true
    false
  special_keys = (ev)->
    # SPECIAL KEYS
    log ev
    switch ev.keyCode #ev.charCode
      when 13, 82, 77 # enter, m or r # 109, 114
        game.init(!!game.player2)
      when 27, 32, 80 # esc, p   # 112
        unless game.world.isPaused()
          game.world.pause()
          intro.show()
          ga? 'send', 'event', 'pause'
          window.scrollTo(0,0)
        false
      else console.log ev.keyCode
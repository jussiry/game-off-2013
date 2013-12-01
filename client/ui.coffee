

global.ui =
  init: (multiplayer)->
    @resize_canvas()
    @start_round(multiplayer)
  resize_canvas: ->
    canvas.style.setProperties
      width:  window.innerWidth+'px'
      height: window.innerHeight+'px'
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
  start_round: (multip)->
    if multip
      qs('#top_left').style.color = null
      qs('#top_right').style.color = null
      qs('#top_left').innerHTML = '0'
      qs('#top_right').innerHTML = '0'
    else
      qs('#top_left').setAttribute 'class', 'hidden'
      qs('#top_right').setAttribute 'class', 'hidden'
    qs('#score').innerHTML = "Round "+game?.round
    qs('#score').setAttribute 'class', ''
    setTimeout ->
      qs('#score').setAttribute 'class', 'hidden'
      qs('#restart').setAttribute 'class', 'hidden'
    , 2000
    qs('#restart').setAttribute 'class', 'hidden'
    qs('#restart').innerHTML = "(r)estart?"
  show_score: (container_id, sClass, txt)->
    (qel = qs container_id).attr('class','').addClass(sClass or '')





window.onresize = ui.resize_canvas

global.intro =
  visible: false
  init: ->
    intro_el = document.createElement('div')
    intro_el.id = 'intro'
    intro_el.innerHTML = """
      <h1>Welcome to Colors!</h1>
      <!--p>Colors is a game where you need to guide balls to correct corners based on their color.</p-->
      <div>
        Colors can be played with one or two players.
        <span class='blue_text'>Blue player</span> uses <pre>arrows keys</pre> to move and
          <span class='red_text'>red player</span> uses <pre>a, s, d and w</pre> keys.
            <span style='color:#999'>Shadow mode</span> can be accessed from <pre>ctrl, shift or alt</pre> keys.</div>

      <p style='text-align: center;'>Press any key</p>
      <!--div style='text-align: center;'><button id='start'>Start the game!</button></div-->
    """
    #debugger
    document.body.appendChild intro_el
  show: ->
    if qs('#intro')
      qs('#intro').setAttribute('class','')
    else
      intro.init()
    this.visible = true
  hide: ->
    qs('#intro').setAttribute('class','hidden')
    intro.visible = false
  toggle: ->
    if intro.visible
    then intro.hide()
    else intro.show()

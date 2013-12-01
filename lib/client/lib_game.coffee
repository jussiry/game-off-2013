
# e.g. String.defineProperty 'impertant_string', 'daa'
#Object.defineProperty Object.prototype, 'defineProperty', (value: (name,prop)-> Object.defineProperty this,name,value:prop)
# e.g. String.defineProperties foo:'bar', zoo:'dar'
#Object.prototype.defineProperty 'defineProperties', (properties)-> Object.defineProperties @, properties

#Object.defineProperty Object.prototype, 'defineProperties', value: (properties)-> Object.defineProperties this, properties

Object.defineProperties Object.prototype,
  merge: value: (obj)->
    for key, val of obj
      @[key] = obj[key]
  #defineProperties: value: (properties)->
  #  Object.defineProperties(this, value: ->(a for name,prop of properties))


window.merge
  # math / physics
  mass2radius:   (mass)-> Math.sqrt(mass/Math.PI)
  radius2mass: (radius)-> radius*radius*Math.PI

  # general
  global: window

  this_is: (obj, args..., scope_)-> scope_.apply(obj,args)
  hsl: (h,s,l,opacity)->  # NEEDED FOR IE8
    if arguments.length <= 2
      l = h
      opacity = s
      h = s = 0
    h = h / 360 if h >= 1
    s = s / 100 if s >= 1
    l = l / 100 if l >= 1
    if s is 0
      r = g = b = l * 255 # achromatic
    else
      hue2rgb = (p, q, t)->
        t += 1 if t < 0
        t -= 1 if t > 1
        if      t < 1/6 then p + (q - p) * 6 * t
        else if t < 1/2 then q
        else if t < 2/3 then p + (q - p) * (2/3 - t) * 6
        else                 p
      q = if l < 0.5 then l * (1 + s)  \
                     else l + s - l * s
      p = 2 * l - q
      r = hue2rgb(p, q, h + 1/3) * 255
      g = hue2rgb(p, q, h)       * 255
      b = hue2rgb(p, q, h - 1/3) * 255
    #rgb_s = "#{r.round()},#{g.round()},#{b.round()}"
    #"0x"+Math.round(r).toString(16)+Math.round(g).toString(16)+Math.round(b).toString(16)
    (r << 16) | (g << 8) | (b << 0)
    ###
    if opacity?
      opacity /= 100 if opacity > 1
      "rgba(#{ rgb_s },#{ opacity })"
    else
      "rgb(#{ rgb_s })"
    ###
  ifs: (arg, true_str, false_str)->
    true_str = arg unless true_str?
    if arg then true_str else (if false_str? then false_str else '')
  log:    console.log.bind console
  spacify: (num_or_str) ->
    a_int_dec = num_or_str.toString().split(".")
    a_int_dec[0] = a_int_dec[0].split("").reverse().map((e, i) ->
      (if i % 3 is 0 and i > 0 then e + " " else e)
    ).reverse().join("")
    a_int_dec[0] + ((if a_int_dec[1] then "." + a_int_dec[1] else ""))
  speed_test: ->
    # PRINT RESULTS
    # drop normalise function from result functions

    #
    # options
    args_a = Array::slice.call(arguments)
    test_this = args_a.filter((e) ->
      typeof e is "object"
    )[0] or window
    normalize = (if args_a.filter((e) ->
      typeof e is "boolean"
    )[0] is false then false else true)
    test_time_ms = args_a.filter((e) ->
      typeof e is "number"
    )[0] or 1000
    # remove options from args (leaving only test functions)
    # add empty function for normalization.
    args_a = args_a.filter((e) -> typeof e is "function")
    if normalize
      args_a = args_a.concat(empty = ->)
    max = undefined
    min = undefined
    times_a = args_a.map(->
      0
    )

    places_IsI = ["first", "second", "third", "fourth", "fifth"]
    new_repeats_n = 0
    all_repeats_n = 0
    f_now = (if performance then performance.now.bind(performance) else Date.now)
    test_round = 0
    # CALCULATE TIME
    while Math.max.apply(null, times_a) < test_time_ms
      new_repeats_n = Math.pow(2, test_round)
      min = Math.min.apply(null, times_a)
      funcInd = 0
      while funcInd < args_a.length
        test_function = args_a[funcInd]
        i = 0
        start_ms = f_now()
        while i < new_repeats_n
          test_function.call test_this
          i++
        res = f_now() - start_ms
        if min
          times_a[funcInd] += res
        else
          times_a[funcInd] = res
        funcInd++
      all_repeats_n += new_repeats_n  if min
      test_round++
    if normalize
      normalize_ms = times_a.pop()
      args_a = args_a.slice(0, -1)
      times_a = times_a.map((ms) ->
        Math.max 0, ms - normalize_ms
      )
    min = Math.min.apply(null, times_a)
    max = Math.max.apply(null, times_a)
    precision_n2s = (n) ->
      (if n < 1 then n.toFixed(2) else (if n < 10 then n.toFixed(1) else n.toFixed(0)))
    if args_a.length > 1
      minInd = times_a.indexOf(min)
      maxInd = times_a.indexOf(max)
      console.log (args_a[minInd].name or places_IsI[minInd]).capitalize() + " is " + precision_n2s(max / min) + " times faster than " + (args_a[maxInd].name or places_IsI[maxInd]) + "."
    args_a.forEach (test_function, ind) ->
      time_ms = times_a[ind] / all_repeats_n
      time_ns = time_ms * 1e6
      s_time = (if time_ms > 1 then time_ms.toFixed(2) + " ms" else spacify(precision_n2s(time_ns)) + " ns")
      console.log (n = test_function.name or places_IsI[ind]) + ": " + " ".repeat(16 - n.length - s_time.length) + s_time

    console.log spacify(all_repeats_n) + " repeats"
  qs:  document.querySelector.bind document
  qsa: document.querySelectorAll.bind document
  reqAnimFrame: window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                (callback)-> window.setTimeout(callback, 1000 / 60)


# PROTOTYPES

Array.prototype.fill = (el, n)->
  n = @length unless n?
  for i in [0...n]
    @[i] = el
  return @

String.prototype.merge
  capitalize: -> @[0].toUpperCase() + @[1..-1]
  toInt: -> parseInt @

# CSSStyleDeclaration
CSSStyleDeclaration.prototype.merge
  setProperties: (obj)->
    for name, val of obj
      @setProperty name, val
  setPos: (left, top)->
    @setProperty "top", top + 'px'
    @setProperty "left", left + 'px'

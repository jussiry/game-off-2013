(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Object.defineProperties(Object.prototype, {
  merge: {
    value: function(obj) {
      var key, val, _results;
      _results = [];
      for (key in obj) {
        val = obj[key];
        _results.push(this[key] = obj[key]);
      }
      return _results;
    }
  }
});

window.merge({
  mass2radius: function(mass) {
    return Math.sqrt(mass / Math.PI);
  },
  radius2mass: function(radius) {
    return radius * radius * Math.PI;
  },
  global: window,
  ifs: function(arg, true_str, false_str) {
    if (true_str == null) {
      true_str = arg;
    }
    if (arg) {
      return true_str;
    } else {
      if (false_str != null) {
        return false_str;
      } else {
        return '';
      }
    }
  },
  log: console.log.bind(console),
  spacify: function(n) {
    var a_int_dec;
    a_int_dec = n.toString().split(".");
    a_int_dec[0] = a_int_dec[0].split("").reverse().map(function(e, i) {
      if (i % 3 === 0 && i > 0) {
        return e + " ";
      } else {
        return e;
      }
    }).reverse().join("");
    return a_int_dec[0] + (a_int_dec[1] ? "." + a_int_dec[1] : "");
  },
  qs: document.querySelector.bind(document),
  qsa: document.querySelectorAll.bind(document),
  reqAnimFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  }
});

Array.prototype.fill = function(el, n) {
  var i, _i;
  if (n == null) {
    n = this.length;
  }
  for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
    this[i] = el;
  }
  return this;
};

String.prototype.merge({
  toInt: function() {
    return parseInt(this);
  }
});

CSSStyleDeclaration.prototype.merge({
  setProperties: function(obj) {
    var name, val, _results;
    _results = [];
    for (name in obj) {
      val = obj[name];
      _results.push(this.setProperty(name, val));
    }
    return _results;
  },
  setPos: function(left, top) {
    this.setProperty("top", top + 'px');
    return this.setProperty("left", left + 'px');
  }
});

})();

//# sourceMappingURL=0d4d295277f1b3ae802f95bd7830b54b43d0b0b7.map

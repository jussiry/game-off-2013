(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (typeof window !== "undefined" && window !== null) {
  window.hsl = function(h, s, l, opacity) {
    var b, g, hue2rgb, p, q, r;
    if (arguments.length <= 2) {
      l = h;
      opacity = s;
      h = s = 0;
    }
    if (h >= 1) {
      h = h / 360;
    }
    if (s >= 1) {
      s = s / 100;
    }
    if (l >= 1) {
      l = l / 100;
    }
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      hue2rgb = function(p, q, t) {
        if (t < 0) {
          t += 1;
        }
        if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        } else if (t < 1 / 2) {
          return q;
        } else if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        } else {
          return p;
        }
      };
      q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3) * 255;
      g = hue2rgb(p, q, h) * 255;
      b = hue2rgb(p, q, h - 1 / 3) * 255;
    }
    return (r << 16) | (g << 8) | (b << 0);
    /*
    if opacity?
      opacity /= 100 if opacity > 1
      "rgba(#{ rgb_s },#{ opacity })"
    else
      "rgb(#{ rgb_s })"
    */

  };
}

})();

//# sourceMappingURL=dabd90fadaf0efbeee832e13a2e999ecadc2323a.map

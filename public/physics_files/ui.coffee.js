(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
global.ui = {
  init: function() {
    canvas.style.setProperties({
      width: window.innerWidth + 'px',
      height: window.innerHeight + 'px'
    });
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    qs('#score').innerHTML = "Round " + (typeof game !== "undefined" && game !== null ? game.round : void 0);
    qs('#score').setAttribute('class', '');
    setTimeout(function() {
      qs('#score').setAttribute('class', 'hidden');
      return qs('#restart').setAttribute('class', 'hidden');
    }, 2000);
    qs('#restart').setAttribute('class', 'hidden');
    return qs('#restart').innerHTML = "(r)estart?";
  }
};

})();

//# sourceMappingURL=a39a41e3346dc8a2092caaf16a8bf1ad9ff59989.map

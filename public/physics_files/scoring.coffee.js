(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var event_score, event_score_el, hide_score_timeout, score_calculator, score_el, text_container;

text_container = event_score_el = score_el = null;

global.goals = {
  '00': 20,
  '01': 125,
  '10': 65,
  '11': 185
};

Meteor.startup(function() {
  var container_el, coord, goal, hue, size, _results;
  container_el = qs('#text_container');
  container_el.style.setPos(document.body.clientWidth / 2 - 80, document.body.clientHeight / 2 - 80);
  event_score_el = qs('#event_score');
  score_el = qs('#score');
  _results = [];
  for (coord in goals) {
    hue = goals[coord];
    goal = document.createElement('div');
    document.body.insertBefore(goal, document.body.firstChild);
    size = 1 * game.goal_size;
    global.border_size = 20;
    goal.style.setProperties({
      'border': "solid " + border_size + "px hsla(" + hue + ",100%,50%,0.5)",
      width: size + 'px',
      height: size + 'px',
      'border-radius': "" + ((coord[0].toInt() & coord[1].toInt()) * size) + "px\n" + ((coord[0].toInt() & !coord[1].toInt()) * size) + "px\n" + ((!coord[0].toInt() & !coord[1].toInt()) * size) + "px\n" + ((!coord[0].toInt() & coord[1].toInt()) * size) + "px",
      position: 'fixed'
    });
    _results.push(goal.style.setPos(coord[1] * game.canvas.width - coord[1] * size - border_size, coord[0] * game.canvas.height - coord[0] * size - border_size));
  }
  return _results;
});

hide_score_timeout = null;

score_calculator = function(hue_distance, mass) {
  var res;
  hue_distance = Math.min(100, hue_distance);
  log('hue_distance: ' + hue_distance, ' mass:' + mass);
  log('score: ' + (res = ((70 - hue_distance) * (20 + mass / 5)) / 100));
  if (res < 0) {
    res /= 2;
  }
  return res;
};

event_score = 0;

global.add_score = function(coords, body) {
  var expected_hue, new_score;
  clearTimeout(hide_score_timeout);
  expected_hue = goals[coords];
  log('expected_hue:' + expected_hue, 'actual:' + body.options.hue);
  new_score = score_calculator(Math.abs(expected_hue - body.options.hue), body.options.mass);
  event_score += new_score;
  event_score_el.innerHTML = (ifs(event_score > 0, '+')) + spacify(parseInt(event_score));
  event_score_el.style.setProperty('color', event_score > 0 ? 'green' : 'red');
  event_score_el.setAttribute('class', '');
  game.score += new_score;
  return hide_score_timeout = setTimeout(function() {
    event_score = 0;
    event_score_el.setAttribute('class', 'hidden');
    if (game.world.getBodies().length === 1) {
      score_el.innerHTML = spacify(Math.round(game.score));
      score_el.setAttribute('class', '');
      localStorage.round = game.round += 1;
      return setTimeout(function() {
        qs('#restart').innerHTML = "(m)ore?";
        return qs('#restart').setAttribute('class', '');
      }, 2000);
    }
  }, 1500);
};

Physics.behavior('scoring', function(parent) {
  return {
    init: function(options) {
      return parent.init.call(this, options);
    },
    behave: function(data) {
      var body, canvas, goal_size, _i, _len, _ref, _results;
      _ref = data.bodies;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        body = _ref[_i];
        if (body === player || (body == null) || body.fixed) {
          continue;
        }
        canvas = game.canvas, goal_size = game.goal_size;
        if (body.state.pos._[0] < goal_size) {
          if (body.state.pos._[1] < goal_size) {
            data.scope.removeBody(body);
            _results.push(add_score('00', body));
          } else if (body.state.pos._[1] > canvas.height - goal_size) {
            data.scope.removeBody(body);
            _results.push(add_score('10', body));
          } else {
            _results.push(void 0);
          }
        } else if (body.state.pos._[0] > canvas.width - goal_size) {
          if (body.state.pos._[1] < goal_size) {
            data.scope.removeBody(body);
            _results.push(add_score('01', body));
          } else if (body.state.pos._[1] > canvas.height - goal_size) {
            data.scope.removeBody(body);
            _results.push(add_score('11', body));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };
});

})();

//# sourceMappingURL=80a21de86b54acd6daebe02efd4581ae6a6dc5e7.map

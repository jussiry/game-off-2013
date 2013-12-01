(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var add_ball;

(function() {
  var radius_divider;
  radius_divider = 31;
  global.radius2hue = function(radius) {
    return 360 * radius / radius_divider;
  };
  return global.hue2radius = function(hue) {
    return hue * radius_divider / 360;
  };
})();

add_ball = function(props) {
  var ball, hue, r;
  if (props.x == null) {
    props.x = Physics.util.random(game.goal_size, canvas.width - game.goal_size);
  }
  if (props.y == null) {
    props.y = Physics.util.random(game.goal_size, canvas.height - game.goal_size);
  }
  if (props.radius == null) {
    props.radius = r = props.radius || mass2radius(props.mass);
  }
  if (props.restitution == null) {
    props.restitution = props.resititution || 0.5;
  }
  if (props.hue == null) {
    props.hue = hue = props.hue || radius2hue(r);
  }
  if (props.color == null) {
    props.color = hsl(hue, 100, 50);
  }
  balls.push(ball = Physics.body(props.shape || 'circle', props));
  return ball;
};

Meteor.startup(function() {
  var edgeBounce, g, renderer, stage, world;
  stage = global.stage = new PIXI.Stage(0x001100);
  global.canvas = qs('#root_canvas');
  ui.init();
  renderer = new PIXI.CanvasRenderer(canvas.width, canvas.height, canvas);
  g = global.g = new PIXI.Graphics;
  stage.addChild(g);
  world = global.world = new Physics.world;
  edgeBounce = Physics.behavior('edge-collision-detection', {
    aabb: Physics.aabb(0, 0, canvas.width, canvas.height),
    restitution: 0.99,
    cof: 0.99
  });
  world.add(edgeBounce);
  world.add(Physics.behavior('body-impulse-response'));
  world.add(Physics.behavior('newtonian', {
    strength: 0.00015
  }));
  world.add(Physics.behavior('sweep-prune'));
  world.add(Physics.behavior('body-collision-detection', {
    checkAll: false
  }));
  world.add(Physics.behavior('scoring'));
  global.game = {
    score: null,
    goal_size: 90,
    canvas: canvas,
    renderer: renderer,
    world: world,
    init: function() {
      var balls, body, coord, dist_from_corner, half, hue, i, m, na, r, x, x_dir, y, y_dir, _i, _j, _k, _len, _ref, _ref1;
      game.round = (parseInt(localStorage.round)) || 1;
      if (typeof ga === "function") {
        ga('send', 'event', 'round_' + game.round);
      }
      game.balls_n = (na = location.pathname.match(/\d+/)) ? na[0] : 5 * game.round;
      _ref = world.getBodies();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        body = _ref[_i];
        world.removeBody(body);
      }
      game.score = 0;
      ui.init();
      balls = global.balls = [];
      for (i = _j = 0, _ref1 = game.balls_n; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        add_ball({
          mass: 10 + 1000 * Math.pow(Math.random(), 5)
        });
      }
      global.player = add_ball({
        radius: r = 20,
        mass: m = 3 * Math.PI * r * r,
        orig_mass: m,
        color: 0xffffff,
        move: new Physics.vector
      });
      dist_from_corner = 0.8 * game.goal_size;
      half = Math.PI / 2;
      for (coord in goals) {
        hue = goals[coord];
        x = coord[1] * game.canvas.width;
        y = coord[0] * game.canvas.height;
        x_dir = coord[1] === '0' ? 1 : -1;
        y_dir = coord[0] === '0' ? 1 : -1;
        for (i = _k = 0; _k < 3; i = ++_k) {
          add_ball({
            x: x + x_dir * Math.sin(half - i * half) * game.goal_size,
            y: y + y_dir * Math.cos(half - i * half) * game.goal_size,
            shape: 'circle',
            radius: 10,
            mass: -500,
            fixed: true,
            color: 0x00ff00
          });
        }
      }
      world.add(balls);
      if (!Physics.util.ticker.isActive()) {
        game.setup_keys();
        Physics.util.ticker.subscribe(function(time, dt) {
          var angular, pos, radius, _l, _len1, _len2, _m, _ref2, _ref3, _ref4;
          if (world.isPaused()) {
            return;
          }
          world.step(time);
          player.accelerate(player.options.move);
          if (player.mass !== player.options.orig_mass) {
            player.mass = player.options.orig_mass;
          }
          g.clear();
          _ref2 = world.getBodies();
          for (_l = 0, _len1 = _ref2.length; _l < _len1; _l++) {
            body = _ref2[_l];
            pos = body.state.pos;
            g.beginFill(body.options.color, 1);
            g.drawCircle(pos._[0], pos._[1], body.geometry.radius);
            g.endFill();
          }
          g.beginFill(0x000000, 0.4);
          _ref3 = world.getBodies();
          for (_m = 0, _len2 = _ref3.length; _m < _len2; _m++) {
            body = _ref3[_m];
            if (body.options.radius > 5) {
              _ref4 = body.state, pos = _ref4.pos, angular = _ref4.angular;
              radius = body.geometry.radius;
              g.drawCircle(pos._[0] + 0.4 * radius * Math.cos(angular.pos), pos._[1] + 0.4 * radius * Math.sin(angular.pos), radius / 3);
            }
          }
          g.endFill();
          return renderer.render(stage);
        });
        return Physics.util.ticker.start();
      }
    },
    setup_keys: function() {
      var move_player, move_strength, pressed_dirs;
      move_strength = 0.0015;
      pressed_dirs = {};
      move_player = function(identifier, dir) {
        switch (identifier) {
          case 'Up':
            player.options.move.add(0, -move_strength * dir);
            break;
          case 'Down':
            player.options.move.add(0, move_strength * dir);
            break;
          case 'Left':
            player.options.move.add(-move_strength * dir, 0);
            break;
          case 'Right':
            player.options.move.add(move_strength * dir, 0);
            break;
          default:
            return true;
        }
        pressed_dirs[identifier] = dir === -1 ? false : true;
        return false;
      };
      window.onkeydown = function(ev) {
        var dir;
        dir = ev.keyIdentifier || ev.key;
        if (pressed_dirs[dir]) {
          return false;
        }
        return move_player(dir, 1);
      };
      window.onkeyup = function(ev) {
        var dir;
        dir = ev.keyIdentifier || ev.key;
        if (!pressed_dirs[dir]) {
          return false;
        }
        return move_player(dir, -1);
      };
      return window.onkeypress = function(ev) {
        var w;
        switch (ev.charCode) {
          case 13:
          case 109:
          case 114:
            return game.init();
          case 32:
            player.mass = -60000;
            return false;
          case 112:
            if ((w = game.world).isPaused()) {
              w.unpause();
            } else {
              w.pause();
            }
            if (typeof ga === "function") {
              ga('send', 'event', 'pause');
            }
            window.scrollTo(0);
            return false;
          default:
            return console.log(ev);
        }
      };
    }
  };
  qs('#restart').onclick = game.init;
  return game.init();
});

Template.setup.rendered = function() {
  
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-194434-9', 'meteor.com');
    ga('send', 'pageview');
  ;
};

})();

//# sourceMappingURL=4a55a1e0bf14fc501112d5c7b11d3c34f71e1e96.map

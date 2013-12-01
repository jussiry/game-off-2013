
# GOALIE ROW:
  # x = coord[1]*game.canvas.width  #+ ()*dist_from_corner
  # y = coord[0]*game.canvas.height #+ ()*dist_from_corner*game.goal_size
  # x_dir = if coord[1] is '0' then 1 else -1
  # y_dir = if coord[0] is '0' then 1 else -1
  # for i in [0...game.goalies_per_goal]
  #   step = 2*Math.PI/16.6
  #   add_ball
  #     x: x + x_dir * Math.sin((offset=0.2)+ i*step) * game.goal_size*1.2
  #     y: y + y_dir * Math.cos( offset     + i*step) * game.goal_size*1.2
  #     shape: 'point'
  #     radius: 10
  #     mass: -200
  #     fixed: true
  #     color: 0x00ff00
const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = robots.map(function(robot_hash){
  let curr_robot = Object.assign({}, robot_hash)

  let isDecepticon = knownDecepticons.find( function(robot){
  	return robot === curr_robot.name
  	}
  )

  if (isDecepticon){
  	curr_robot.alliance = "decepticon"
  }else{
  	curr_robot.alliance = "autobot"
  }

  return curr_robot
});

var coloredZebraStripes = zebraStripes.map(function(something, index){
  let mahStripes = Object.assign({}, something)
  if ((index % 2) === 0){
    mahStripes.color = "black"
  }else{
    mahStripes.color = "white"
  }
  return mahStripes
});

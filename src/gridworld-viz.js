var paper = require('paper');

function createCanvas(element, options) {
  var canvas = document.createElement('canvas');
  canvas.width = options.width || 100;
  canvas.height = options.height || 100;
  canvas.style.border = "1px solid #0f0";
  element.appendChild(canvas);
  return canvas;
}

function draw(element, world) {
  // var world = {
  //   width: 100,
  //   height: 100,
  //   fromX: 0,
  //   fromY: 0,
  //   incX: 100,
  //   incY: 100
  // };
  var canvas = createCanvas(element, { width: world.width, height: world.height });
  paper.setup(canvas);
  var path = new paper.Path();
  path.strokeColor = 'black';
  var start = new paper.Point(world.fromX, world.fromY);
  path.moveTo(start);
  path.lineTo(start.add([world.incX, world.incY]));
  paper.view.draw();  
}

module.exports = {
  draw: draw
}

paper.settings.applyMatrix = false;
project.activeLayer.transform( new Matrix(1,0,0,-1, 0, view.size.height) );

var origin = new Point(0, 0);
var drawables = [];

var colors = ['red', 'blue', 'yellow', 'magenta', 'green'];
var path = null, polPoint = null, textPoint = null;
polygon = null;

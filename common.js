
var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

ctx.beginPath(); // начало контура
ctx.moveTo(100,100);
ctx.lineTo(80,60);
ctx.lineTo(110,80);
ctx.lineTo(125,40);
ctx.lineTo(140,80);
ctx.lineTo(170,60);
ctx.lineTo(150,100);
ctx.lineTo(150,100);
ctx.bezierCurveTo(140,90,110,90,100,100);
ctx.closePath(); // конец контура
ctx.stroke(); // отрисовка контура

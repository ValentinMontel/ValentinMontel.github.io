var canvas = document.getElementById('mycanvas');
var myimg = document.getElementById('fond');
var ctx = canvas.getContext('2d');

ctx.drawImage(myimg , 0, 0);

ctx.fillStyle = 'green';
ctx.fillRect(0, 500, 1200, 300);

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 1200, 500);

ctx.fillStyle = 'maroon'
ctx.beginPath();
ctx.moveTo(50, 500);
ctx.lineTo(350, 500);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'maroon'
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(600, 500);
ctx.lineTo(450, 150);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'maroon'
ctx.beginPath();
ctx.moveTo(800, 500);
ctx.lineTo(1100, 500);
ctx.lineTo(950, 200);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'orange';
ctx.fillRect(750, 450, 300, 250);

ctx.fillStyle = 'red'
ctx.beginPath();
ctx.moveTo(750, 450);
ctx.lineTo(1050, 450);
ctx.lineTo(900, 300);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'purple';
ctx.fillRect(800, 500, 100, 200);

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(300, 150, 50, 0, 2 * Math.PI)
ctx.closePath();
ctx.fill();
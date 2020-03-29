const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.moveTo(25 , 25);
ctx.lineTo(125, 25);
ctx.lineTo(25, 125);

ctx.fill();

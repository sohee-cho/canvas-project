const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.arc(350, 250, 150, 0, Math.PI * 2);
ctx.strokeStyle = 'pink'
ctx.lineWidth = '10'
ctx.stroke();

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = `rgb(255, 102, 102)`;
ctx.fillRect(20, 20, 660, 460);
ctx.clearRect(235, 130, 230, 230);
ctx.strokeRect(225, 120, 250, 250);

function draw() {
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  } else {
    const para = document.querySelector(".unsupported");
    para.textContent = `Your browser does not support HTML5 Canvas.`;
  }
}

draw();


// function draw () {
//     const canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d');
// };

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// ctx.fillStyle = rgb(255, 102, 102);

// ctx.fillRect(15, 15, 300,200);
// ctx.clearRect(20, 20, 280,180);
// ctx.strokeRect(30, 30, 315,215);

// ctx.stroke();

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');

//         ctx.fillStyle = rgb(255, 80, 80);
//         ctx.fillRect(25, 25, 100, 100);
//         ctx.clearRect(45, 45, 60, 60);
//         ctx.strokeRect(50, 50, 50, 50);
//         ctx.stroke();
//     }
// }
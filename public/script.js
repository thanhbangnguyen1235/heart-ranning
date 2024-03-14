let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let numhearts = canvas.width;
let hearts = [];
let speed = 3;
let centerx = canvas.width / 2;
let centery = canvas.height / 2;

for (let i = 0; i < numhearts; i++) {
  hearts[i] = new heart();
}

function heart() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.z = Math.random() * canvas.height;
  this.color = Math.random() * 360;
  this.move = function () {
    this.z = this.z + speed;
    if (this.z >= canvas.height) {
      this.z = 0;
    }
  };
  this.show = function () {
    let x, y, s, color;
    x = (this.x - centerx) * (canvas.width / this.z);
    x = x + centerx;
    y = (this.y - centery) * (canvas.width / this.z);
    y = y + centery;
    s = 1.5 * (canvas.width / this.z);
    context.beginPath();
    context.strokeStyle = "hsl(" + this.color + ",100%,50%)";
    context.arc(x, y, s, 0, Math.PI);
    context.lineWidth = 2 * s;
    context.lineCap = "round";
    context.stroke();
  };
}

function draw() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numhearts; i++) {
    hearts[i].show();
    hearts[i].move();
  }
  requestAnimationFrame(draw) ||
    webkitRequestAnimationFrame(draw) ||
    mozRequestAnimationFrame(draw) ||
    oRequestAnimationFrame(draw) ||
    msRequestAnimationFrame(draw);
}

requestAnimationFrame(draw) ||
  webkitRequestAnimationFrame(draw) ||
  mozRequestAnimationFrame(draw) ||
  oRequestAnimationFrame(draw) ||
  msRequestAnimationFrame(draw);

const targetElement = document.getElementById("text");
const texts = [
  "chin chào chào",
  "đây là hiệu ứng copy trên mạng zề thoy",
  "xem sao đẹp thoy chứ đừng trầm trồ zì nha...",
];

let textConfirm = false;
let index = (countIndex = waitTime = 0);
targetElement.textContent = "|";
let count = 0;
setInterval(function () {
  let countText = texts[index];

  if (count < 114) {
    if (textConfirm == false) {
      targetElement.textContent = targetElement.textContent.replace("|", "");
      targetElement.innerHTML += texts[index][countIndex] + "|";
      countIndex++;

      if (countIndex == countText.length) {
        textConfirm = true;
        countIndex = 0;
        index++;
      }
    }

    if (textConfirm == true) {
      waitTime++;
      if (waitTime == 10) {
        textConfirm = false;
        targetElement.innerHTML = "";
        waitTime = 0;
      }
    }

    if (index >= 3) {
      index = 0;
    }
    count = count + 1;
  } else {
    document.getElementById("text").style.display = "none";
  }
}, 100);

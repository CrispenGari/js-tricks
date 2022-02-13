const canvas = document.getElementById("canvas");
const resize = () => {
  const { width, height } = canvas.getBoundingClientRect();
  ctx.canvas.width = width;
  ctx.canvas.height = height;
};

const ctx = canvas.getContext("2d");
resize();
const pos = { x: 0, y: 0 };

const setPosition = (e) => {
  pos.x = e.pageX - canvas.offsetLeft;
  pos.y = e.pageY - canvas.offsetTop;
};

const draw = (e) => {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
};

canvas.addEventListener("resize", resize);
canvas.addEventListener("mousemove", draw, false);
window.addEventListener("mousedown", setPosition, false);
window.addEventListener("mouseenter", setPosition, false);

document.querySelector("#clear-btn").addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

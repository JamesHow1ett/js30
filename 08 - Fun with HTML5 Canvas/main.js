const clearBtn = document.getElementById('clear');
const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (event) => {
  if (!isDrawing) { return; }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  // go to
  [lastX, lastY] = [event.offsetX, event.offsetY];
  // hue staff
  hue++;
  if (hue > 359) { hue = 0; }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) { direction = !direction; }
  direction ? ctx.lineWidth++ : ctx.lineWidth--;

}

const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
clearBtn.addEventListener('click', clear);

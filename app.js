const canvas = document.getElementById("jsCanvas");
let painting = false;
const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
const ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById('jsMode');
const INITIAL_COLOR = "#2c2c2c";
//console.log(Array.from(colors));
ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "";
ctx.lineWidth = 2.5
let filling = false;
Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));
if (range) {
    range.addEventListener('input', handleRangeChange);
}
if (mode) {
    mode.addEventListener('click', handleModeClick);
}

function handleModeClick(e) {
    console.log(e);
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";

    }

}

function handleRangeChange(e) {
    const size = e.target.value;
    ctx.lineWidth = size;
    console.log(e.target.value);
}

function handleColorClick(e) {
    console.log(e);
    const color = e.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleCanvasClick() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}
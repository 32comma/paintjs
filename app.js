const canvas = document.getElementById("jsCanvas");
let painting = false;
canvas.width = 700;
canvas.height = 700;
const ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
//console.log(Array.from(colors));
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
const range = document.getElementById("jsRange");

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));
if (range) {
    range.addEventListener('input', handleRangeChange);
}

function handleRangeChange(e) {
    console.log(e.target.value);
    ctx.lineWidth = e.target.value;
}

function handleColorClick(e) {
    console.log(e);
    const color = e.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
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



if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
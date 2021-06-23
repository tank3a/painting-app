const body = document.querySelector("body");
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColors");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 700;
 
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}
function startPainting() {
    painting = true;
}
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function onMouseLeave(event) {
    ctx.beginPath();
}
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}
function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}
function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseleave", onMouseLeave);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
    range.addEventListener("input", handleRangeChange);
}
if(mode) {
    mode.addEventListener("click", handleModeClick);
}
function init() {
    body.addEventListener("mouseup", stopPainting);
}
init();
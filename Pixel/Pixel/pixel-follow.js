function createCanvas(width, height, backgroundColor,canvasId) {
    var canvasCreate = document.createElement('canvas');
    canvasCreate.id = canvasId;
    canvasCreate.width = width;
    canvasCreate.height = height;
    canvasCreate.style.backgroundColor = backgroundColor;
    canvasCreate.style.top = "0px";
    canvasCreate.style.left = "0px";
    canvasCreate.style.position = "absolute";
    document.body.appendChild(canvasCreate);
}

function square(sideLength, color, startX, startY) {
    this.x = startX;
    this.y = startY;
    this.sideLength = sideLength;
    this.color = color;
    this.mass = 1;
    this.bounce = 1;
    this.gravity = 10;
}

createCanvas(window.innerWidth, window.innerHeight, "#171717", "pixelCanvas"); //create canvas

var canvasId = document.getElementById("pixelCanvas");
var canvas = canvasId.getContext("2d");

var squareOne = new square(25, "#FF6C00", 0, 0);

var mass = squareOne.mass;
alert(mass);

canvas.fillStyle = squareOne.color;
canvas.fillRect(squareOne.x, squareOne.y, squareOne.sideLength, squareOne.sideLength);



canvasId.addEventListener("click", function () {
    alert("hello");
})



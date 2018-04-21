//create canvas function
function createCanvas(width, height, backgroundColor, canvasId) {
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

//pixel object
function pixel(sideLength, color, startX, startY) {
    this.x = startX;
    this.y = startY;
    this.sideLength = sideLength;
    this.color = color;
    this.mass = 1;
    this.bounce = 1;
    this.gravity = 10;
    this.xVelocity = 10;
    this.yVelocity = 10;
}

//where all pixels are stored
var arrayOfPixels = [];
//creating canvas
createCanvas(window.innerWidth, window.innerHeight, "#171717", "pixelCanvas");

//canvas config
var canvasId = document.getElementById("pixelCanvas");
var canvas = canvasId.getContext("2d");

//width & height
var width = window.innerWidth;
var height = window.innerHeight;

//redraw function
function redraw() {
    canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var a = 0; a < arrayOfPixels.length; a++) {
        canvas.fillStyle = arrayOfPixels[a].color;
        canvas.fillRect(arrayOfPixels[a].x, arrayOfPixels[a].y, arrayOfPixels[a].sideLength, arrayOfPixels[a].sideLength);
    }
    window.requestAnimationFrame(redraw);
}

//move function
function move() {
    for (var a = 0; a < arrayOfPixels.length; a++) {

        //hitting x max border
        if (arrayOfPixels[a].x > width - arrayOfPixels[a].sideLength) {
            arrayOfPixels[a].xVelocity = -1 * (arrayOfPixels[a].xVelocity);
            arrayOfPixels[a].xVelocity = (arrayOfPixels[a].xVelocity) * (arrayOfPixels[a].bounce);
        }

        //hitting y  max border
        if (arrayOfPixels[a].y > height - arrayOfPixels[a].sideLength) {
            arrayOfPixels[a].yVelocity = -1 * (arrayOfPixels[a].yVelocity);
            arrayOfPixels[a].yVelocity = (arrayOfPixels[a].yVelocity) * (arrayOfPixels[a].bounce);
        }

        //hitting x min border
        if (arrayOfPixels[a].x < 0) {
            arrayOfPixels[a].xVelocity = -1 * (arrayOfPixels[a].xVelocity);
            arrayOfPixels[a].xVelocity = (arrayOfPixels[a].xVelocity) * (arrayOfPixels[a].bounce);
        }

        //hitting y min border
        if (arrayOfPixels[a].y < 0) {
            arrayOfPixels[a].yVelocity = -1 * (arrayOfPixels[a].yVelocity);
            arrayOfPixels[a].yVelocity = (arrayOfPixels[a].yVelocity) * (arrayOfPixels[a].bounce);
        }

        //changing x & y locations
        arrayOfPixels[a].x += arrayOfPixels[a].xVelocity;
        arrayOfPixels[a].y += arrayOfPixels[a].yVelocity;
    }
}

//creating first pixel
var pixelOne = new pixel(20, "#FF6C00", 0, 0);
arrayOfPixels.push(pixelOne);

//creating second pixel
var pixelTwo = new pixel(20, "#FF6C00", 0, 0)
pixelTwo.bounce = 0.5;
arrayOfPixels.push(pixelTwo);

//starting redraw and move functions
window.requestAnimationFrame(redraw);
var iterval = setInterval(move, 20);

//click event listener
canvasId.addEventListener("click", function () {
    alert("hello");
})



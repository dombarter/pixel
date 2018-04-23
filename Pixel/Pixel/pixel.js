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
function pixel(id,sideLength, color, startX, startY) {
    this.id = id;
    this.x = startX;
    this.y = startY;
    this.sideLength = sideLength;
    this.color = color;
    this.mass = 1;
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

//check collision
function checkCollision(pixel1, pixel2) {
    //check x then nested y

    //check y then nested x

    if (pixel1.x < pixel2.x) { //pixel 1 is on left

        if (pixel1.y > pixel2.y) { //pixel1 is on top

        }
        else if (pixel1.y < pixel2.y) { //pixel1 is on bottom

        }
        else { //pixel1 is in line

        }
    }
    else if (pixel1.x > pixel2.x) { //pixel1 is on right

        if (pixel1.y > pixel2.y) { //pixel1 is on top

        }
        else if (pixel1.y < pixel2.y) { //pixel1 is on bottom

        }
        else { //pixel1 is in line

        }
    }
    else { //pixel 1 is in line

        if (pixel1.y > pixel2.y) { //pixel1 is on top
            if (pixel2.y += pixel1.sideLength >= pixel1.y) { //collision detected
                pixel1.yVelocity = -1 * (pixel1.yVelocity);
                pixel2.yVelocity = -1 * (pixel2.yVelocity);
            }
        }
        else if (pixel1.y < pixel2.y) { //pixel1 is on bottom
            if (pixel1.y += pixel2.sideLength >= pixel2.y) {
                pixel1.yVelocity = -1 * (pixel1.yVelocity);
                pixel2.yVelocity = -1 * (pixel2.yVelocity);
            }
        }
        else { //pixel1 is in line
            pixel1.yVelocity = -1 * (pixel1.yVelocity);
            pixel2.yVelocity = -1 * (pixel2.yVelocity);
        }
    }

}

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
        if (arrayOfPixels[a].x >= width - arrayOfPixels[a].sideLength) {
            arrayOfPixels[a].xVelocity = -1 * (arrayOfPixels[a].xVelocity);
        }

        //hitting y  max border
        if (arrayOfPixels[a].y >= height - arrayOfPixels[a].sideLength) {
            arrayOfPixels[a].yVelocity = -1 * (arrayOfPixels[a].yVelocity);
        }

        //hitting x min border
        if (arrayOfPixels[a].x < 0) {
            arrayOfPixels[a].xVelocity = -1 * (arrayOfPixels[a].xVelocity);
        }

        //hitting y min border
        if (arrayOfPixels[a].y < 0) {
            arrayOfPixels[a].yVelocity = -1 * (arrayOfPixels[a].yVelocity);   
        }

        //changing x & y locations
        arrayOfPixels[a].x += arrayOfPixels[a].xVelocity;
        arrayOfPixels[a].y += arrayOfPixels[a].yVelocity;
    }
}

//starting redraw and move functions
window.requestAnimationFrame(redraw);
var iterval = setInterval(move, 20);

//counter
var counter = 1;

//click event listener
canvasId.addEventListener("click", function () {
    var fixedColor = "#FF6C00";
    var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    var pixelToAdd = new pixel(counter,20, randomColor, 0, 0);
    arrayOfPixels.push(pixelToAdd);
    counter++;
})



function setup() {
  console.log('Hi from setup');
  // Create a canvas 200px wide and 200px tall
  createCanvas(200, 200);
  // Add a background color
  background('tomato');
  // Change framerate
  frameRate(5);
}

function draw() {
  // console.log('Hi from draw');
  // // Offset the canvas
  //   // translate(10, 10);
  //   // random(0, width) returns a value between
  //   // 0 and the width of the canvas.
  //   // As does random(0, height) for height.
  //   translate(random(0, width), random(0, height));
  //
  // // Define fill color before shape
  //   fill('papayawhip');
  // // Draw a rectangle
  //   rect(0, 0, 50, 50);
  // // Define a new fill color
  //   fill('thistle');
  // // Add a circle
  //   ellipse(25, 25, 25, 25);

  // Example from p5 docs
  // Adds circles with white or black fill
  // coords based on mouseX, mouseY

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

  // Individual points
  // The two parameters of the point() method each specify
// coordinates.
// The first parameter is the x-coordinate and the second is the Y
stroke(255);
point(width * 0.5, height * 0.5);
point(width * 0.5, height * 0.25);

    // No loop stops the constant refresh of draw
    noLoop();
}


function mousePressed() {
  redraw();
}


// Draw target
function draw() {
  drawTarget(width*0.25, height*0.4, 200, 4);
  drawTarget(width*0.5, height*0.5, 300, 10);
  drawTarget(width*0.75, height*0.3, 120, 6);
}

function drawTarget(xloc, yloc, size, num) {
  grayvalues = 255/num;
  steps = size/num;
  for (i = 0; i < num; i++) {
    fill(i*grayvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}

// Recursion
function draw() {
  drawCircle(width/2, 280, 6);
}

function drawCircle(x, radius, level) {
  var tt = 126 * level/4.0;
  fill(tt);
  ellipse(x, height/2, radius*2, radius*2);
  if(level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}

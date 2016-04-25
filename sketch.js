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
}

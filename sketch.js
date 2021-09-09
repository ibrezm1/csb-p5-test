/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(600, 120);
  background(220);
  x = 0; // Start at the left edge of the canvas
  speed = 3;
}

function draw() {
  // Put drawings here
  background(0);
  x = x + speed; // Move slightly to the right every frame by changing the value of x by 1
  if (x > width) {
    speed *= -1;
  }
  if (x === 0) {
    speed *= -1;
  }
  ellipse(x, 60, 20, 20);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

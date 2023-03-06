function setup() {
  FaceX = mouseX;
  FaceY = 300;
  createCanvas(400, 400);
}

function draw() {
  background("skyblue");
  noStroke();
  // make ground
  fill(92, 64, 51);
  rect(0, 345, 400);
  addFace(FaceX, FaceY);
}

function addFace(x, y) {
  push();
  translate(mouseX, y);

  // Draw the face
  fill(255, 220, 165);
  strokeWeight(2);
  stroke(0);
  ellipse(25, 25, 40, 40);

  // Draw the eyes
  fill(0);
  noStroke();
  // ellipse(18, 20, 5, 5);
  // ellipse(32, 20, 5, 5);

  // Draw the mouth
  noFill();
  strokeWeight(3);
  stroke(2);
  fill("black");
  arc(25, 35, 15, 10, 4, 3.9);

  if (mouseIsPressed) {
    ellipse(18, 20, 1, 7);
    ellipse(32, 20, 1, 7);
  } else {
    ellipse(18, 20, 5, 5);
    ellipse(32, 20, 5, 5);
  }
}

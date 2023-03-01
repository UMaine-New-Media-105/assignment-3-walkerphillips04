function setup() {
  FaceX = mouseX;
  FaceY = 300;
  createCanvas(400, 400);
}

function draw() {
  background("lightblue");
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
  ellipse(18, 20, 5, 5);
  ellipse(32, 20, 5, 5);

  // Draw the mouth
  noFill();
  strokeWeight(3);
  stroke(2);
  fill("black")
  arc(25, 35, 15, 10, 4,3.9);
}

function setup() {
  FaceX = mouseX;
  FaceY = 300;
  // groundY = 345;
  orangeX = random(10, 390);
  orangeY = -400;
  orangeSpeed = random(3, 7)
  createCanvas(400, 400);
}

function draw() {
  background("skyblue");
  noStroke();
  // make ground
  fill(92, 64, 51);
  rect(0, 345, 400);
  orange(orangeX, orangeY, 0.2);
  orangeY = orangeY + orangeSpeed;
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
    ellipse(18, 20, 7, 0);
    ellipse(32, 20, 7, 0);
  } else {
    ellipse(18, 20, 5, 5);
    ellipse(32, 20, 5, 5);
  }
}

function orange(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("orange");
  ellipse(200, 200, 80, 80); // draw orange circle
  pop();
}

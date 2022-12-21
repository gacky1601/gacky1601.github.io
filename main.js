function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  push();
  // rotateY(-millis() / 1000);
  drawHeart(50, 0, 0, 0, 249, 37, 72);
  textSize(32);
  text("Yupooooo's Website is Comming Soon...", 10, 30);
  pop();
  

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawHeart(BoxSize, posX, posY, posZ, r, g, b) {
  fill(r, g, b);

  //1
  translate(posX, posY, posZ);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(4 * (10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate((10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate((10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  //2
  translate(0, -(10 / 9) * BoxSize, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  //3
  translate((10 / 9) * BoxSize, -(10 / 9) * BoxSize, 0);
  box(BoxSize);
  translate((10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(2 * (10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate((10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  //4
  translate(0, 3 * (10 / 9) * BoxSize, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate(-(10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  //5
  translate((10 / 9) * BoxSize, (10 / 9) * BoxSize, 0);
  box(BoxSize);
  translate((10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  translate((10 / 9) * BoxSize, 0, 0);
  box(BoxSize);
  //6
  translate(-(10 / 9) * BoxSize, (10 / 9) * BoxSize, 0);
  box(BoxSize);
}
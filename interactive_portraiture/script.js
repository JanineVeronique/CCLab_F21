let cam;
let curX= 0;
let curY= 0;
let prevX= 0;
let prevY= 0;
let myColor= "red";

function setup() {
  createCanvas(640, 480);
  background(220);

  cam = createCapture(VIDEO); // 640 * 480
  cam.hide();
}

function draw() {
  background(0);
  cam.loadPixels();
  let size = 20;
  for (let y = 0; y < cam.height; y += size) {
    for (let x = 0; x < cam.width; x += size) {
      let index = (x + y * cam.width) * 4;
      // cam
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let avg = (r + g + b) / 5;
      //
      stroke(55, 150, 100);
      fill(255);
      let dia = map(avg, 200, 300, 2, size);
      ellipse(x, y, dia, dia);
    }
  }
  curX=mouseX;
  curY=mouseY;

  if (mouseIsPressed) {
    stroke(myColor);
    strokeWeight(5);
    line(prevX, prevY, curX, curY);
    console.log("prev: " + prevX + "," + prevY);
    console.log("curr: " + curX + "," + curY);
  }
  prevX=curX
  prevY=curY
}

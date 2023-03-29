let x, y, diametro;
let cor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  diametro = 150;
}

function draw() {
  background(255);

  stroke(0);
  strokeWeight(0.5);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  if (x < width / 2 && y < height / 2) {
    cor = color(255, 0, 0); //vermelho
  } else if (x > width / 2 && y < height / 2) {
    cor = color(0, 255, 0); //verde
  } else if (x > width / 2 && y > height / 2) {
    stroke(0);
    cor = color(255); //branco
  } else {
    cor = color(0, 0, 255); //azul
  }

  fill(cor);
  ellipse(x, y, diametro, diametro);
}

function mouseClicked() {
  // função retirada doa biblioteca reference p5js.org
  x = mouseX;
  y = mouseY;
}

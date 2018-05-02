let myCanvas; //canvas variable
let count = 2; //number of functions

function setup() {
  myCanvas = createCanvas(400, 400);
  myCanvas.parent('js');
  background('#ecf0f1');
  strokeWeight(3);
}

// function draw() {
//   background('#ecf0f1');
//   shape1();
// }

function mousePressed() {
  if (mouseX > 0 && mouseX <= width) {
    let choice = floor(random(count + 1));
    if (choice === 1) {
      form1();
    } else if (choice === 2) {
      form2();
    }
  }
}

function form1() {
  background('#ecf0f1');
  for (let i = 0; i <= 200; i += 10) {
    stroke(0);
    line(i, 0, 0, i);
  }

  for (let i = 1; i <= 400; i += 50) {
    noFill();
    ellipse(i + 20, 200, 40, 40);
  }

  for (let i = 0; i <= 400; i += 20) {
    line(i, height - i, i, height - i + 40);
  }
}

function form2() {
  background('#ecf0f1');
  rectMode(CENTER);
  for (let i = 0; i < width; i += 15) {
    noFill();
    rect(i, i, 20, 20);
  }

  for (let i = 0; i < height; i += 40) {
    line(width - i, height - i, i, height - i);
  }

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let s = random(20, 90);
    fill(0);
    ellipse(x, y, s);
  }

  for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
      fill(0);
    } else {
      noFill();
    }
    rect(i * 10, height - i * 10, 5 * i, 10);
  }
}
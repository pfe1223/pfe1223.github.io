let myCanvas; //canvas variable
let count = 3; //number of functions
let choice = 0; //function to be used

function setup() {
  myCanvas = createCanvas(400, 400); //make canvas
  myCanvas.parent('js'); //assign sketch to #js element
  background('#ecf0f1'); //set initial background
  strokeWeight(3); //set line thickness to 3px
  angleMode(DEGREES);
}

function mousePressed() {
  if (choice === count) { //reset variable if equal to number of functions
    choice = 0;
  }
  choice++; //go to next sketch
  //console.log(choice);
  if (choice === 1) {
    form1(); //show this image if choice is 1
  } else if (choice === 2) {
    form2(); //show this image if choice is 2
  } else if (choice === 3) {
    form3(); //show this image if choice is 3
  }
}

function form1() {
  background('#ecf0f1'); //clear canvas
  for (let i = 0; i <= 200; i += 10) {
    stroke(0);
    line(i, 0, 0, i); //draw 20 diagonal lines
  }

  for (let i = 1; i <= 400; i += 50) {
    noFill();
    ellipse(i + 20, 200, 40, 40); //draw 8 hollow circles
  }

  for (let i = 0; i <= 400; i += 20) {
    //draw 20 vertical lines
    line(i, height - i, i, height - i + 40);
  }
}

function form2() {
  background('#ecf0f1'); //clear background
  rectMode(CENTER); //draw rects from their center
  for (let i = 0; i < width; i += 15) {
    noFill();
    rect(i, i, 20, 20);
  }

  for (let i = 0; i < height; i += 40) {
    //draw 10 lines
    line(width - i, height - i, i, height - i);
  }

  for (let i = 0; i < 5; i++) {
    //draw 5 circles of random position and size
    let x = random(width);
    let y = random(height);
    let s = random(20, 90);
    fill(0);
    ellipse(x, y, s);
  }

  for (let i = 0; i < 50; i++) {
    //draw alternating black & white rectanges that grow longer
    if (i % 2 === 0) {
      fill(0);
    } else {
      noFill();
    }
    rect(i * 10, height - i * 10, 5 * i, 10);
  }
}

function form3() {
  background('#ecf0f1'); //clear background

  let x = random(width); //random x value
  let y = random(height); //random y value
  for (let i = 0; i < 50; i += 10) {
    //draw five random vertical lines
    line(x + i, y, x + i, y + 60);
  }

  x = random(width);
  y = random(height);
  for (let i = 0; i < 50; i += 10) {
    //draw five random horizontal lines
    line(x, y + i, x + 60, y + i);
  }

  x = random(0, 30);
  y = random(20, height - 20);
  noFill();
  //draw 10 horizontal circles
  for (let i = 0; i < 100; i += 10) {
    ellipse(x + i, y, 5)
  }

  x = random(50, height - 50);
  y = 50;
  //draw 5 vertical circles
  for (let i = 0; i < height; i += 80) {
    noFill();
    rect(x, y + i, 50, 50);
  }

  for (let i = 0; i < 10; i++) {
    //draw 10 "gears"
    x = random(50, width - 50);
    y = random(50, height - 50);
    push();
    translate(x, y);
    for (let j = 0; j < 360; j += 36) {
      x = cos(j) * 20;
      y = sin(j) * 20;
      line(0, 0, x, y);
    }
    pop();
  }
}
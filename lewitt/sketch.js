let c; //canvas variable
let x = -20;

function setup() {
  c = createCanvas(400, 400);
  c.parent('js');
}

function draw() {
  background('#ecf0f1');
  fill(0);
  shape1();
}

function shape1() {
  for (let i = 0; i < 200; i += 10) {
    stroke(0);
    line(i, 0, 0, i);
  }
}
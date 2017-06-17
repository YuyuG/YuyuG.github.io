var w = window.innerWidth,
  h = window.innerHeight,
  radius = w / 5;

var dr = 30,
  rn = .5,
  t = 0;

var cvs, ctx, gradientStroke, pg;

function setup() {
  createCanvas(w, h);
}

function draw() {
  clear();

  beginShape();

  translate(w / 2, h / 2);
  for (var i = 0; i < TWO_PI; i += radians(1)) {

    var r = radius + map(noise(rn + rn * cos(i), rn + rn * sin(i), t), 0, 1, -dr, dr);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    noStroke();
    fill("#34ebb6");
  }

  endShape();

  t += 0.01;

}
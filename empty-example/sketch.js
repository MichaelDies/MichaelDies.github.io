let input;
var startTime, endTime;
var counter = 0;
var timeDiff;
function setup(scale) {
  createCanvas(20, 200);
  background(255);

  input = new p5.AudioIn();
  input.start();
}

function draw(draw) {
  let volume = input.getLevel();
  let threshold = 0.8;
  if (volume > threshold) {
    if (counter==0) {
      setTimeout(100);
      startTime = Date.now()/1000;
      counter = 1;

    }
    else {
      endTime = Date.now()/1000;
      counter=0;
      volume = 0;
      timeDiff = endTime - startTime;
        setTimeout(100);
    }
  }

  var speed;
  speed = 10 / timeDiff;

  // Graph the overall potential volume, w/ a line at the threshold
  let y = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  // Then draw a rectangle on the graph, sized according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);

  document.getElementById("calculations"). innerHTML = "Speed = " + speed + "<br>" + "Time = " + timeDiff + "<br> " + "StartTtime =" + startTime + "<br> "  + "EndTime =" + endTime  ;
}

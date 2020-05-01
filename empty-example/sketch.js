let input;
var startTime, endTime;
var counter = 0;
var timeDiff;
var speed;
var energy;
var weight;


function setup() {
  createCanvas(20, 200);
  background(255);
  input = new p5.AudioIn();
  input.start();

}
function draw() {
  let volume = input.getLevel();
  let threshold = 0.2;

  if (counter == 0) {
  if (volume > threshold) {
        //setTimeout(100);;
        startTime = Date.now()/1000;
        counter =1;
        //setTimeout(100);
      }
  } else if (counter == 1) {
          if (volume > threshold) {
              endTime = Date.now()/1000;
              counter=2;
              timeDiff = endTime - startTime;
              }
            }
              else if (counter ==2){
                  counter=0;
                   if (timeDiff> 0) {
                      speed = 10 / timeDiff;
                      energy = (1/2) * 0.15 * (speed * speed);
                      document.getElementById("calculations"). innerHTML = "Speed = " + speed + "<br>" + "Time = " + timeDiff + "<br> " + "Energy = " + energy + "<br>" +"StartTtime = " + startTime + "<br> "  + "EndTime = " + endTime  ;
                      setTimeout(100);
                      //timeDiff=0;
                      }
                    }

  let y = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);
  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);

}

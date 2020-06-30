let input;
var startTime, endTime;
this.counter = 0;
var timeDiff;
var speed;
var energy;
this.max = 0.10 ;
var volume;
this.threshold=0.1;
// function myFunction() {
//   var table = document.getElementById("myRow");
//   var row = table.insertRow(0);
//   var cell1 = row.insertCell(0);
//   row.innerHTML = "NEW CELL1";
// }



function start(){
  input.start();
}


function setup() {

  createCanvas(20, 200);
  background(255);
  input = new p5.AudioIn();
  input.start();

}

function draw() {

    setInterval(()=>{


      volume = input.getLevel();

    //max = volume;
    if (volume > threshold) {
      if (counter == 0){ // first measurment , first sound
        if (max > volume) {
            startTime = Date.now()/1000;
            counter = 1;
            max = 0.10;
        }
        else {
          max = volume;
        }
      }
        else { // second measurment , second sound, and calculations.
          if (max > volume) {
            endTime = Date.now()/1000;
            timeDiff = endTime - startTime;
              input.stop();
                  speed = 10 / timeDiff; // the target is suppost to be at 10 meters, because speed is distance / time.
                  energy = (1/2) * 0.2 * (speed * speed); //
                  document.getElementById("calculations"). innerHTML = "Speed = " + speed + "  (KM/S)"
                                                             + "<br>" + "Time = " + timeDiff + "  (Seconds)"
                                                             + "<br>" + "Energy = " + energy + "  (Jol)"
                                                             + "<br>" + "StartTtime = " + startTime + "  (Seconds)"
                                                             + "<br>" + "EndTime = " + endTime +"  (Seconds)" ;
                    counter =0;
                  //location.reload();
          }
          else {
            max = volume;
          }
        }
      }

    },200);

//counter = 0;
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

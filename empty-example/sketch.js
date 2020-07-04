let input;
var startTime, endTime;
this.counter = 0;
var timeDiff;
var speed;
var energy;
var distancefloated;
var weightfloated;
this.max = 0.10 ;
var volume;
this.threshold=0.13;
var distance_entered;
var weight_entered;

function getDistance(){
  distance_entered = document.getElementById("d").value;
  weight_entered = document.getElementById("w").value;
  distancefloated = parseFloat(distance_entered);
  weightfloated = parseFloat(weight_entered);

  if (distancefloated>0) {
    if (weightfloated>0) {
    input.start();
  }
  else {
      alert("The Distance or the Weight is Zero ...");
    }
}
else {
    alert("The Distance or the Weight is Zero ...");
  }
}
// function myFunction() {
//   var table = document.getElementById("myRow");
//   var row = table.insertRow(0);
//   var cell1 = row.insertCell(0);
//   row.innerHTML = "NEW CELL1";
// }


function setup() {

  createCanvas(20, 200);
  background(255);
  input = new p5.AudioIn();

}

function draw() {
speed = parseFloat(speed);
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
              if (distance_entered>0) {
                if (weight_entered>0) {
                speed = distance_entered / timeDiff; // the target is suppost to be at 10 meters, because speed is distance / time.
                energy = (1/2) * weight_entered * (speed * speed); //
              }
            }

                  document.getElementById("calculations"). innerHTML =
                                                              "Speed = " + speed + "  (KM/S)"
                                                             + "<br>" + "Time = " + timeDiff + "  (Seconds)"
                                                             + "<br>" + "Energy = " + energy + "  (Jols)"
                                                             + "<br>" + "StartTtime = " + startTime + "  (Seconds)"
                                                             + "<br>" + "EndTime = " + endTime +"  (Seconds)" ;
                    counter =0;
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


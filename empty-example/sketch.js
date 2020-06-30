let input;
var startTime, endTime;
var counter = 0;
var timeDiff;
var speed;
var energy;
var max ;
var max1;
var max3;
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
    let volume = input.getLevel();
    let threshold = 0.75;
    max3 = volume;
    if (counter == 0){
       if (volume > threshold) {
         max = volume;
         if (max > volume) {
           volume = max;
         }
         else {
           max = volume;
         }
            if (max = volume) {
              startTime = Date.now()/1000;
              counter = 1;
            }
        }
      }

       else if  (counter == 1){
          if (volume > threshold) {
            max1 = volume;
            if (max1 > volume) {
              volume = max1;
            }
            else {
              max1 = volume;
            }
            if (max1 = volume) {
              if (max > max1) {
              endTime = Date.now()/1000;
              timeDiff = endTime - startTime;
              counter = 2;
                    }
                  }
                }
              }
              else  if (counter == 2){
                  if (timeDiff> 0) {
                        speed = 10 / timeDiff;
                        energy = (1/2) * 0.15 * (speed * speed);
                      alert( "Speed = " + speed + "  (KM/S)" +
                          "Time = " + timeDiff + "  (Seconds)"
                          + "Energy = " + energy + "  (Jol)"
                          +"StartTtime = " + startTime + "  (Seconds)"
                          + "EndTime = " + endTime +"  (Seconds)" );
                        location.reload();
                        counter = 0;
                        }
                      }
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

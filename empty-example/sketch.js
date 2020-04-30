let input;
var startTime, endTime;
var counter =0;
var timeDiff;
var speed;
function setup() {
  createCanvas(20, 200);
  background(255);
  input = new p5.AudioIn();
  input.start();
}

function draw() {
  let volume = input.getLevel();
  let threshold = 0.4;




  if (counter == 0) {
    if (volume > threshold) {
      //setTimeout(100);;
      startTime = Date.now()/1000;
      counter =1;
      //setTimeout(100);

    }

}else if (counter == 1) {
      if (volume > threshold) {
        endTime = Date.now()/1000;
        counter=2;
      //  volume = 0;
        //setTimeout(100);
          timeDiff = endTime - startTime;
      }


    } else if (counter ==2){
        counter=0;
          if (timeDiff> 0) {
            speed = 10 / timeDiff;
            document.getElementById("calculations"). innerHTML = "Speed = " + speed + "<br>" + "Time = " + timeDiff + "<br> " + "StartTtime = " + startTime + "<br> "  + "EndTime = " + endTime  ;
            setTimeout(100);
            //timeDiff=0;

          }

      }





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
  //




}

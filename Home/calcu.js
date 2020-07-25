var brick1;
var wall1;




function Calculate(){
	
  wall_l = document.getElementById("l1").value;
  wall_h = document.getElementById("h1").value;
  brick_l = document.getElementById("l").value;
  brick_h = document.getElementById("h").value;

  wall_l_floated = parseFloat(wall_l);
  wall_h_floated = parseFloat(wall_h);
  brick_h_floated = parseFloat(brick_h);
  brick_l_floated = parseFloat(brick_l);

//   if (wall_l_floated>0) {
//     if (brick_l_floated>0) {
    
//   }
//   else {
//       alert("The Distance or the Weight is Zero ...");
//     }
// }
// else {
//     alert("The Distance or the Weight is Zero ...");
//   }

var brick = wall_l / brick_l;
var brick1 = wall_h / brick_h;
var all = brick * brick1;
document.getElementById("calculations"). innerHTML = "Bricks Needed in Width= " + brick + "<br>" + "Bricks Needed In Hight= " + brick1 + "<br>" + "Bricks Needed All= " + all   ;

}
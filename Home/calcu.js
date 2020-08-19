
function Calculate(){
	
  wall_l = document.getElementById("l1").value;
  wall_h = document.getElementById("h1").value;
  brick_l = document.getElementById("l").value;
  brick_h = document.getElementById("h").value;
  window_l = document.getElementById("wl").value;
  window_h = document.getElementById("wh").value;
  

  wall_l_floated = parseFloat(wall_l);
  wall_h_floated = parseFloat(wall_h);
  brick_h_floated = parseFloat(brick_h);
  brick_l_floated = parseFloat(brick_l);

 

var brick = wall_l / brick_l;
var brick1 = wall_h / brick_h;
var all = brick * brick1;


var window1 = window_l / brick_l;
var window2 = window_h / brick_h;
var window_f = window1 * window2;

var everything =  all - window_f;


document.getElementById("calculations"). innerHTML = "Bricks Needed in Width= " + brick 
													+ "<br>" + "Bricks Needed In Hight= " + brick1 
													+ "<br>" + "Bricks Needed All= " + all
													+ "<br>" + "Bricks Needed in hight= " + window2 
													+ "<br>" + "Bricks Needed in width= " + window1 
													+ "<br>" + "Bricks Needed for window= " + window_f 
													+ "<br>" + "All the Bricks Needes = " + everything; 

}

function window(){

	for (var i = n; i >= n; i++) {
		n++;
	}
}

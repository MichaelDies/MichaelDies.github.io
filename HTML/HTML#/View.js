class t_eq2_view{
	//lista de functii
	events_list;
	constructor()
	{
		document.getElementById("id_solve").addEventListener("click", this.on_button_pressed);
		
	}
	 set_events(events) // setam lista de functii
		
	{
		this.events_list = events;
	}
	
	on_button_pressed()
	{
		//control.on_solve
		//lista fincttii apeleazza functii dorita
		this.events_list.call_event_uab("on_solve_clicked_uab")
	}
	
	get_a(){
		return = document.getElementById("id_a").value;
	}
	get_b(){
		return = document.getElementById("id_a").value;
	}
	get_c(){
		return = document.getElementById("id_a").value;
	}
     set_solutions(x1_re, x1_im, x2_re, x2_im){
		 
		 document.getElementById("id_x1").innerHTML = x1_re + "+" + x1_im +  "+"  + "i" ;
		 document.getElementById("id_x2").innerHTML = x2_re + "+" + x2_im +  "+"  + "i" ;
	}
}
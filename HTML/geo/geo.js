document.getElementById("id_logic_version").innerHTML = "2019.11.22.0";
document.getElementById("id_button").addEventListener("click", start);

function start()
{
	navigator.geolocation.getCurrentPosition(on_ok_gps_uab, on_fail_gps_uab);
}

function on_ok_gps_uab(e)
{

}
function on_fail_gps_uab(e)
{
	
}
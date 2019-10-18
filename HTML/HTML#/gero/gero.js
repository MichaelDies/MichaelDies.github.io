window.addEventListener("deviceorientation", on _rotate_uab);

function on_rotate_uab(e)
{
	doccument.getElementById("id_alpha").innerHTML = e.alpha;
	doccument.getElementById("id_beta").innerHTML = e.beta;
	doccument.getElementById("id_gamma").innerHTML = e.gamma;
}
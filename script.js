var x = document.getElementById("hands");
var y = document.getElementById("monkeyHand");

function closeEye()
{
	y.style.backgroundImage="url('images/monkey_pwd.gif')";
	x.style.marginTop="0%";
}

function openEye()
{
	y.style.backgroundImage="url('images/monkey.gif')";
	x.style.marginTop="110%";
}
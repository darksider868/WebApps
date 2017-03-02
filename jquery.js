function changecolor()
{
	document.getElementById("cool").style.color = "red";
	document.getElementById("cool").firstChild.nodeValue = "Extreme Pan";
	document.getElementById("cool").style.height = "10%";
	document.getElementById("cool").style.width = "50%";
	return true;
};

function fs6pan()
{
	document.getElementById("steel").src ="b6note.gif";
		settimeout(function(){
			setInterval(function(){
			$('#steel').attr('src',$('#steel').attr('src'))
		},-1)
},1000)
	
}
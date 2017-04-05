/* changes the color of text and changes the name of text when mouse moves over */
function changecolor()
{
	document.getElementById("cool").style.color = "red";
	document.getElementById("cool").firstChild.nodeValue = "Extreme Pan";
	document.getElementById("cool").style.height = "10%";
	document.getElementById("cool").style.width = "50%";
	return true;
};
/* function to change video when button pressed */
function pan(pannote)
{
	/* checks tag and changes the source of the video and loads the video to play */
	var video = document.getElementsByTagName('video') [0];
	
    var sources = video.getElementsByTagName('source');
    sources[0].src = pannote;
    
    video.load();
	
}

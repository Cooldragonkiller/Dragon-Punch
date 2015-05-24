document.write("You need to punch some dragons<br/>");
document.write("<br/>Okay, sure");

function whoToPunch(punchTarget, numberOfTimes){
    	
	for (var index = 0; index < numberOfTimes; index = index + 1){
		document.write("<img src=\"http://i.imgur.com/InCs4Ie.png\"/>"+punchTarget);
		
	}
}

whoToPunch("<img src=\"http://i.imgur.com/Fa5HjTJ.png\"/>", 4);

whoToPunch("<img src=\"http://i.imgur.com/hCNbvTP.png\"/>", 1);

var num = 19;

document.write("<br/><br/><br/><br/>Woooo! You done it, congrations!");


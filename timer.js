function onBodyLoad(){
    spawnBombs()
}

function spawnBombs(){
    countDown(10, "timer")
}

function countDown(secs, elem){
    const element = document.getElementById(elem)
    element.innerHtml = secs
    if(secs < 1) {
		clearTimeout(timer);
		
	}
    secs--;
    let timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
}
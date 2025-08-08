function colorear(){
	var cuerpos=document.querySelectorAll(".etiqPerfTitulo .cuerpo");
	var titulos=document.querySelectorAll(".titulo span");
	for (var i = cuerpos.length - 1; i >= 0; i--) {
		var color=colorAleatorio();
		cuerpos[i].setAttribute("style","background-color:"+color);
		titulos[i].setAttribute("style","color:"+color+"!important");
	}
}



function colorearMatiz(){
	/*Elementos con titulos*/
	var cuerpos=document.querySelectorAll(".etiqPerfTitulo .cuerpo");
	var titulos=document.querySelectorAll(".titulo span");
	/*Elementos sin titulos*/
	var cuerposST=document.querySelectorAll(".etiqPerf .cuerpo");
	/*Elementos largos*/
	var cuerposSTLargo=document.querySelectorAll(".etiqPerfLargo .cuerpo");

	var a=Math.floor(Math.random()*357);
	for (var i = cuerpos.length - 1; i >= 0; i--) {
		var color=a-(i*15);
		
		cuerpos[i].setAttribute("style","background-color: hsl("+color+",97%,41%)");
		titulos[i].setAttribute("style","color:hsl("+color+",97%,41%)!important");
		
	}
	a=Math.floor(Math.random()*357);
	for (var i = cuerposST.length - 1; i >= 0; i--) {
		var color=a-(i*15);
		cuerposST[i].setAttribute("style","background-color: hsl("+color+",97%,41%)");
	}
	a=Math.floor(Math.random()*357);
	for (var i = cuerposSTLargo.length - 1; i >= 0; i--) {
		var color=a-(i*15);
		cuerposSTLargo[i].setAttribute("style","background-color: hsl("+color+",97%,41%)");
	}
}

function colorAleatorio(){
	var letras='0123456789ABCDEF';
	var color='#';
	for(var i=0;i<6;i++){
		color+= letras[Math.floor(Math.random()*13)];
	}
	return color;
}
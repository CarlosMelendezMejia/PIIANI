$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass('active');
	});
});

function setURL(url){
	document.getElementById('FrameDeConsulta').src = url;
	if(window.outerWidth<600){
		document.getElementById('sidebarCollapse').click()
	}else{

	}
}


var encabezado = document.getElementById("listaMenuPrincipal");
var botoncini = encabezado.getElementsByClassName("btnMenu");
for (var i = 0; i < botoncini.length; i++) {
	botoncini[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("activeMenu");
		current[0].classList.remove("activeMenu");
		this.classList.add("activeMenu");
		var lista=document.getElementById("listaMenuSecundario");
		if(this==document.getElementById("tituloSubmenu")){
			lista.classList.remove("oculto");
		}else{
			lista.classList.add("oculto");
		}
	});
}


var jeder = document.getElementById("listaMenuSecundario");
var botolon = jeder.getElementsByClassName("btnLi");
for (var i = 0; i < botolon.length; i++) {
	botolon[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("activeLi");
		current[0].classList.remove("activeLi");
		this.classList.add("activeLi");
	});
}

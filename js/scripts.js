function redireccionar() {
	
	var str1 = "location.href='http://";
	var ip = location.host;
	var str3 = "/ProyectoPAPIIT/'";
	var res = str1.concat(ip, str3);
	setTimeout(res, 5000);
}

function redireccionarA(direccion) {

  var str1 = "location.href='http://";
  var ip = location.host;
  var str3 = "/ProyectoPAPIIT/"+direccion+"'";
  var res = str1.concat(ip, str3);
  setTimeout(res, 100);
}

function irAtras() {
	document.getElementById("FrameDeConsulta").contentWindow.history.back();
	/*window.history.back();*/
}

function volverAtras() {
	/*document.getElementById("FrameDeConsulta").contentWindow.history.back();*/
	window.history.back();
}

var angle = 0;
function RotarImagen(ImagenID) {
  //angle = (angle + 180) % 360;
  //img = document.getElementById(ImagenID);
  //img.className = "flecha rotate" + angle;
  var str=document.getElementById(ImagenID).classList[1];
  var res = str.substring(6);
  img = document.getElementById(ImagenID);
  img.classList.remove(str);
  img.classList.add("rotate"+(parseInt(res)+180)%360);


}

function getValor(isValue) {
	document.getElementById('botonDescargaGen').href = ""+isValue;
}


function ordenarAZ(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("Tabla");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function ordenarNum(n) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("Tabla");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function MostrarSi(n,valor,idmostrar){
  /*alert("Seleccion"+n.value);*/
  if(n.value==valor){
    document.getElementById(idmostrar).classList.remove("ocultar");
    document.getElementById(idmostrar).classList.add("mostrar");
  }else{
    document.getElementById(idmostrar).classList.remove("mostrar");
    document.getElementById(idmostrar).classList.add("ocultar");
  }
}

function MostrarRadioSi(n,idmostrar){
  /*alert("Seleccion"+n.value);*/
  if(n.checked){
    document.getElementById(idmostrar).classList.remove("ocultar");
    document.getElementById(idmostrar).classList.add("mostrar");
  }else{
    document.getElementById(idmostrar).classList.remove("mostrar");
    document.getElementById(idmostrar).classList.add("ocultar");
  }
}

function OcultarSi(n,valor,idmostrar){
  /*alert("Seleccion"+n.value);*/
  if(n.value!=valor){
    document.getElementById(idmostrar).classList.remove("ocultar");
  }else{
    document.getElementById(idmostrar).classList.add("ocultar");
  }
}

function MostrarOcultarRadio(n){
  var nombre=n.name;
  var radios=document.getElementsByName(nombre);
  for (var i = 0; i < radios.length; i++) {
    var bloque=radios[i].dataset.bloque;
    if(bloque!=undefined){
      /*console.log("el bloque no es undefined");*/

      if(radios[i].checked){
        document.getElementById(bloque).classList.remove("ocultar");
        document.getElementById(bloque).classList.add("mostrar");
        /*break;*/
      }else{
        document.getElementById(bloque).classList.remove("mostrar");
        document.getElementById(bloque).classList.add("ocultar");
      }
    }
  }

}

function Mostrar(idmostrar){
  document.getElementById(idmostrar).classList.remove("ocultar");
  document.getElementById(idmostrar).classList.add("mostrar");
  
}
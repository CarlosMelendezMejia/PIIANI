var offset=14;
var table = document.getElementById('tabla');
var num_rows = table.rows.length;
var num_columns = table.rows[num_rows-2].cells.length;
var arreglo= new Array(num_columns-offset);
for(j=offset;j<num_columns;j++){
  var entero=0;
  for(i=0;i<num_rows;i++){
    if(table.rows[i].cells[j]===undefined){
    }else{
      var valor=parseInt(table.rows[i].cells[j].innerText);
      if(!isNaN(valor)){
        entero+=valor;
      }
    }
  }
  arreglo[j-offset]=entero;
}

for(i=0;i<num_rows-2;i++){
  columnasFaltantes=num_columns-table.rows[i+1].cells.length;
  //console.log("i+1: "+(i+1)+" columnasFaltantes:"+columnasFaltantes );
  for(j=0;j<columnasFaltantes;j++){
    document.getElementById(i+1).innerHTML+="<td></td>";
  }
}

var resultados=document.getElementById('sumas');
for(i=0;i<num_columns-offset;i++){
  resultados.innerHTML+="<td>"+arreglo[i]+"</td>";
}

var encabezado=document.getElementById('semestres');
var año=2009;
var sem=1;
for(i=0;i<num_columns-1;i++){
  encabezado.innerHTML+="<td>"+año+"-"+sem+"</td>";
  sem++;
  
  if(sem>2){
    año++;
    sem=1;;
  }
}
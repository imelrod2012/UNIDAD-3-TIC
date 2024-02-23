 function comprobar() {
    let numero0 = parseInt(document.getElementById("numero").value);
    if(numero0 >= 0 && numero0 <=4) {
            document.getElementById("solucion").innerHTML = "Suspenso";
        }
        else if (numero0 >= 7 && numero0 <9) { 
            document.getElementById("solucion").innerHTML = "Notable";
        }
        else if (numero0 >= 5 && numero0 <6) { 
            document.getElementById("solucion").innerHTML = "Suficiente";
        }
        else if (numero0 >= 6 && numero0 <7) { 
            document.getElementById("solucion").innerHTML = "Bien";
        }
        else if (numero0 >= 9 && numero0 <=10) { 
            document.getElementById("solucion").innerHTML = "Sobresaliente";
        }
        else { 
        document.getElementById("solucion").innerHTML = "La nota que has puesto no es válida";
     }
 }

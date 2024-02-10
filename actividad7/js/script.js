 function comprobar() {
    let numero = parseInt(document.getElementById("numero").value, 10);;
    numero = parseInt(prompt("¿Qué nota tienes?"), 10);
    if(numero>=0 && numero<5) {
        alert ("Estas suspenso")
    }
    else { 
        alert ("Estas aprobado")
    }
}
function MensajeSwitch() {
    let hora = parseInt(document.getElementById("hora").value ,10);
    switch (hora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("solution").innerHTML = "Buenos días";
        break;
        case 12:
        case 13:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            document.getElementById("solution").innerHTML = "Buenas tardes";
        break;
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            document.getElementById("solution").innerHTML = "Buenas noches";
        break;
        default:
            document.getElementById("solution").innerHTML = "Esta respuesta no es válida";
    }
}
function MensajeIf() {
    const hora = parseInt(document.getElementById("hora").value ,10);
    let hora1; 
    
        if((hora) >=7 && (hora)<=11) {
            document.getElementById("solution").innerHTML = "Buenos días";
        }
        else if ((hora) >=12 && (hora)<=21) {
        document.getElementById("solution").innerHTML = "Buenas tardes";
    }
    else if ((hora) >=0 && (hora)<=6 || (hora) >=22  && (hora)<=24) {
        document.getElementById("solution").innerHTML = "Buenas noches";
    }
    else {
        document.getElementById("solution").innerHTML = "El valor introducido no es válido";
    }
}
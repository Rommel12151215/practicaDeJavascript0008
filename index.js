function relojDigital() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
 
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
 
    var tiempo = horas + ":" + minutos + ":" + segundos;
 
    document.getElementById("reloj").innerText = tiempo;
 }
 
 setInterval(relojDigital, 1000);
 
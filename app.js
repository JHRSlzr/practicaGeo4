function obtieneUbicacion() {
    if(navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(muestraPosicion);


    }
    else {
        demo.innerHTML = "El navegador no dispone de la capacidad de geolocalización"
    }

    function muestraPosicion(posicion) {

        var coordenadas = posicion.coords.latitude + "," + posicion.coords.longitude;

        var imagenmapa = document.getElementById("imagenmapa");
        imagenmapa.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + coordenadas + "&zoom=18&size=800x800&key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24";


    }

}

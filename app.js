function getUbication() {
    if(navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(showPosition);


    }
    else {
        demo.innerHTML = "EL DISPOSITIVO NO PUEDE LOCALIZARSE :("
    }

    function showPosition(pos) {

        var coords = pos.coords.latitude + "||||" + pos.coords.longitude;

        var mapimg = document.getElementById("mapimg");
        mapimg.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + coords + "&zoom=18&size=800x800&key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24";


    }

}
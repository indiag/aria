function FindLocation() {
    //code by John Fitzpatrick
    // HDIp COM SC
    geocoder = new google.maps.Geocoder();
    InitializeMap();

    var address = document.getElementById("addressinput").value;
    var pool = new Array();
    pool[0] = "Cork Street Dublin";
    pool[1] = "Quarry Road, Cabra, Dublin";
    pool[2] = "Bishopstown Road, Cork";
    pool[3] = "Henry Street, Galway";
    pool[4] = "Ennis Road,Limerick";
    pool[5] = "Rindoon Park, Athlone";
    pool[6] = "Scarlett Street, Drogheda";


    var poolphone = new Array();
   poolphone[0] = "01 2334546";
    poolphone[1] = "01 69547382";
    poolphone[2] = "046 2324356";
    poolphone[3] = "035 1556563";
    poolphone[4] = "011 0393842";
    poolphone[5] = "044 4747362";
    poolphone[6] = "068 5634728";


    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });


            if (address == pool[0]) {
                document.getElementById('l1').innerHTML = poollocations[0] + 'Tel:' + poolphone[0];
            }
            if (address == pool[1]) {
                document.getElementById('l1').innerHTML = poollocations[1] + ' Tel:' + poolphone[1];

            }
            if (address == pool[2]) {
                document.getElementById('l1').innerHTML = poollocations[2] + ' Tel:' + poolphone[2];

            }
            if (address == pool[3]) {
                document.getElementById('l1').innerHTML = poollocations[3] + ' Tel:' + poolphone[3];

            }
            if (address == pool[4]) {
                document.getElementById('l1').innerHTML = gymlocations[4] + ' Tel:' + poolphone[4];

            }
            if (address == pool[5]) {
                document.getElementById('l1').innerHTML = gymlocations[5] + ' Tel:' + poolphone[5];

            }
            if (address == pool[6]) {
                document.getElementById('l1').innerHTML = gymlocations[6] + ' Tel' + poolphone[6];

            }


        }
        else {
            alert("Not successful for the following reason: " + status);
        }
    });


}
function jourz_onclick() {
    FindLocation();
}

window.onload = InitializeMap;


onload = function () {
    FindLocation();
}
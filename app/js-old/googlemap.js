var map;
var geocoder;
function InitializeMap() {
    var latlng = new google.maps.LatLng(0, 0);
    var myOptions =
    {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.getElementById("map"), myOptions);
}
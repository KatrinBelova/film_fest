import $ from 'jquery';

window.initMap = function() {
    var location = { lat: 50.505791, lng: 30.618063};
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // The latitude and longitude to center the map (always required)
        center: location,
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var icon = {
        path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
        fillColor: '#c81100',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 0.12
    };
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        map: map,
        icon: icon,
        position: new google.maps.LatLng(50.506235, 30.617830)
    });

};


google.maps.event.addDomListener(window, 'load', initMap); 


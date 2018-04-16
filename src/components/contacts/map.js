import loadGoogleMapsApi from 'load-google-maps-api';


const mapElement = document.getElementById('map');

loadGoogleMapsApi({
    key: 'AIzaSyB2q6zEsyO1_6cgAl7ySX_ewJUvQuvYHgw'
}).then(function (googleMaps) {
    const map = new googleMaps.Map(mapElement, {
        zoom: 12,
        center: { lat: 50.486467, lng: 30.574951 },
    });

    const marker = new googleMaps.Marker({
        position: { lat: 50.505791, lng: 30.618063 }
    });

    marker.setMap(map);
}).catch(function (error) {
    console.error(error)
});

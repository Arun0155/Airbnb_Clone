mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometery.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 8, // starting zoom
});


const marker1 = new mapboxgl.Marker({ color: "red" })
.setLngLat(listing.geometery.coordinates)
.setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4></h4>${listing.title}<p>Exact Location provided after booking</p>`
    )
)
.addTo(map);
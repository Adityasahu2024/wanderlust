


    mapboxgl.accessToken = mapToken;
    
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style:"mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

    
const marker = new mapboxgl.Marker({ color: "red" })
.setLngLat(listing.geometry.coordinates)
.setPopup(
  new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<div class="map-click">
    <h4><b>${listing.title}</b></h4> 
    <p>Exact loaction will be provided after booking.</p>
    </div>`
  )
)
.addTo(map);

// map.addControl(new mapboxgl.ScaleControl());
// map.addControl(new mapboxgl.NavigationControl());
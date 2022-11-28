// This array contains the coordinates for all bus stops between MIT and Harvard
const buses = [
 
];

//Mapbox credentials
mapboxgl.accessToken = 'pk.eyJ1IjoiY2x3bWNzZSIsImEiOiJjbGFoNHZ3MW4wMWIwM250YmN6ejg4bDhuIn0.JZ_FLtFzy24uDr7z2MGTbw';

// This is the map focus and zoom
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-77.03675, 38.89388],
  zoom: 10,
});
map.resize();

// marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
// *** let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
var buses= [];
async function run(){
	// get bus data    
	const locations = await getBusLocations();
	console.log(locations)
	locations.forEach((bus, i) => {
		var marker = new mapboxgl.Marker({ "color": colors[i] })
		.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
		.setPopup(new mapboxgl.Popup({offset: 25, closeOnClick: false, closeButton: false}).setHTML(`<h3>Bus ID <br>
		${bus.attributes.label}</h3>`))
		.addTo(map)
		.togglePopup();

		busesMarkers.push(marker);	
	});

	function eraseMarks(){
		if (busesMarkers!==null) {
		for (var i = busesMarkers.length - 1; i >= 0; i--) {
		busesMarkers[i].remove();
		}
	}
	}

	locations.forEach((marker, i)=>{
		let popUp = document.getElementsByClassName('mapboxgl-popup-content');
		popUp[i].style.background = colors[i];
	});

	setTimeout(eraseMarks,7500)

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

map.on('load', function () {
	run();
  });








// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
      setTimeout(() => {
        if (counter >= busStops.length) return;
            marker.setLngLat(busStops[counter]);
            counter++;
             // Make sure you call move() after you increment the counter.
             move();
            }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}



===================



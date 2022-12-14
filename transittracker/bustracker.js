const colors = [
	'#f44336',
	'#4caf50',
	'#e91e63',
	'#ffc107',
	'#9c27b0',
	'#cddc39',
	'#673ab7',
	'#8bc34a',
	'#3f51b5',
	'#2196f3',
	'#ff9800',
	'#03a9f4',
	'#ff5722',
	'#00bcd4',
	'#795548',
	'#009688',
	'#9e9e9e',
	'#ffeb3b',
	'#607d8b'
  ]
mapboxgl.accessToken =
"pk.eyJ1IjoiY2x3bWNzZSIsImEiOiJjbGFoNHZ3MW4wMWIwM250YmN6ejg4bDhuIn0.JZ_FLtFzy24uDr7z2MGTbw";
const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/streets-v11", // style URL
center: [-71.104881, 42.365554], // starting position [lng, lat]
zoom: 12, // starting zoom
});
map.resize();
var busesMarkers = [];
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

// async function noBuses(){
// 	const locations = await getBusLocations();

// 	if(locations == []){
// 		element = document.getElementsByClassName('no-buses');
// 		element.innerHTML = "There is no Buses in transit at this moment in MBTA Route 1. Come back in a few hours. Current Time: " + new Date().toUTCString();
// 	}
// 	setTimeout(()=>{
// 		if(locations == []){
// 			noBuses();
// 		}
// 	}, 1000);

// }



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
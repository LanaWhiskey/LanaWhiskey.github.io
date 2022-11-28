
const colors = ['#CCFF00','#CCFF33','#CCFF66','#CCFF99','#CCFFCC','#CCFFFF','#FFFFFF','#FFFFCC','#FFFF99','#FFFF66','#FFFF33','#FFFF00','#CCCC00','#CCCC33','#CCCC66','#CCCC99','#CCCCCC','#CCCCFF','#FFCCFF','#FFCCCC','#FFCC99','#FFCC66','#FFCC33','#FFCC00','#CC9900','#CC9933','#CC9966','#CC9999','#CC99CC','#CC99FF','#FF99FF','#FF99CC','#FF9999','#FF9966','#FF9933','#FF9900','#CC6600','#CC6633','#CC6666','#CC6699','#CC66CC','#CC66FF','#FF66FF','#FF66CC','#FF6699','#FF6666','#FF6633','#FF6600','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#FF33FF','#FF33CC','#FF3399','#FF3366','#FF3333','#FF3300','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#FF00FF','#FF00CC','#FF0099','#FF0066','#FF0033','#FF0000','#660000','#660033','#660066','#660099','#6600CC','#6600FF','#9900FF','#9900CC','#990099','#990066','#990033','#990000','#663300','#663333','#663366','#663399','#6633CC','#6633FF','#9933FF','#9933CC','#993399','#993366','#993333','#993300','#666600','#666633','#666666','#666699','#6666CC','#6666FF','#9966FF','#9966CC','#996699','#996666','#996633','#996600','#669900','#669933','#669966','#669999','#6699CC','#6699FF','#9999FF','#9999CC','#999999','#999966','#999933','#999900','#66CC33','#66CC66','#66CC99','#66CCCC','#66CCFF','#99CCFF','#99CCCC','#99CC99','#99CC66','#99CC33','#99CC00','#66FF00','#66FF33','#66FF66','#66FF99','#66FFCC','#66FFFF','#99FFFF','#99FFCC','#99FF99','#99FF66','#99FF33','#99FF00','#00FF00','#00FF33','#00FF66','#00FF99','#00FFCC','#00FFFF','#33FFFF','#33FFCC','#33FF99','#33FF66','#33FF33','#33FF00','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#33CCFF','#33CCCC','#33CC99','#33CC66','#33CC33','#33CC00','#009900','#009933','#009966','#009999','#0099CC','#0099FF','#3399FF','#3399CC','#339999','#339966','#339933','#339900','#006600','#006633','#006666','#006699','#0066CC','#0066FF','#3366FF','#3366CC','#336699','#336666','#336633','#336600','#003300','#003333','#003366','#003399','#0033CC','#0033FF','#3333FF','#3333CC','#333399','#333366','#333333','#333300','#000033','#000066','#000099','#0000CC','#0000FF','#3300FF','#3300CC','#330099','#330066','#330033','#330000','#CCFF00','#CCFF33','#CCFF66','#CCFF99','#CCFFCC','#CCFFFF','#FFFFFF','#FFFFCC','#FFFF99','#FFFF66','#FFFF33','#FFFF00','#CCCC00','#CCCC33','#CCCC66','#CCCC99','#CCCCCC','#CCCCFF','#FFCCFF','#FFCCCC','#FFCC99','#FFCC66','#FFCC33','#FFCC00','#CC9900','#CC9933','#CC9966','#CC9999','#CC99CC','#CC99FF','#FF99FF','#FF99CC','#FF9999','#FF9966','#FF9933','#FF9900','#CC6600','#CC6633','#CC6666','#CC6699','#CC66CC','#CC66FF','#FF66FF','#FF66CC','#FF6699','#FF6666','#FF6633','#FF6600','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#FF33FF','#FF33CC','#FF3399','#FF3366','#FF3333','#FF3300','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#FF00FF','#FF00CC','#FF0099','#FF0066','#FF0033','#FF0000','#660000','#660033','#660066','#660099','#6600CC','#6600FF','#9900FF','#9900CC','#990099','#990066','#990033','#990000','#663300','#663333','#663366','#663399','#6633CC','#6633FF','#9933FF','#9933CC','#993399','#993366','#993333','#993300','#666600','#666633','#666666','#666699','#6666CC','#6666FF','#9966FF','#9966CC','#996699','#996666','#996633','#996600','#669900','#669933','#669966','#669999','#6699CC','#6699FF','#9999FF','#9999CC','#999999','#999966','#999933','#999900','#66CC33','#66CC66','#66CC99','#66CCCC','#66CCFF','#99CCFF','#99CCCC','#99CC99','#99CC66','#99CC33','#99CC00','#66FF00','#66FF33','#66FF66','#66FF99','#66FFCC','#66FFFF','#99FFFF','#99FFCC','#99FF99','#99FF66','#99FF33','#99FF00','#00FF00','#00FF33','#00FF66','#00FF99','#00FFCC','#00FFFF','#33FFFF','#33FFCC','#33FF99','#33FF66','#33FF33','#33FF00','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#33CCFF','#33CCCC','#33CC99','#33CC66','#33CC33','#33CC00','#009900','#009933','#009966','#009999','#0099CC','#0099FF','#3399FF','#3399CC','#339999','#339966','#339933','#339900','#006600','#006633','#006666','#006699','#0066CC','#0066FF','#3366FF','#3366CC','#336699','#336666','#336633','#336600','#003300','#003333','#003366','#003399','#0033CC','#0033FF','#3333FF','#3333CC','#333399','#333366','#333333','#333300','#000033','#000066','#000099','#0000CC','#0000FF','#3300FF','#3300CC','#330099','#330066','#330033','#330000']

mapboxgl.accessToken ="pk.eyJ1IjoiY2x3bWNzZSIsImEiOiJjbGFoNHZ3MW4wMWIwM250YmN6ejg4bDhuIn0.JZ_FLtFzy24uDr7z2MGTbw";

const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/streets-v11", // style URL
center: [-71.104881, 42.365554], // centered position [lng, lat]
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
		${bus.attributes.label}<br></h3>`))
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

	setTimeout(eraseMarks,15000)

	// timer
	setTimeout(run, 20000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1,8,10,47,171&include=route';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

map.on('load', function () {
	run();
  });
  
  
  
  
  
  
//  	const url = 'https://api-v3.mbta.com/vehicles?&include=route';

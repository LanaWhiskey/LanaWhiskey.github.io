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
    '#607d8b']
    mapboxgl.accessToken ="pk.eyJ1IjoibGFuYTEwMTUiLCJhIjoiY2xhaDR2NmRmMDQxajNvc2E3bGZnY3E3dyJ9.QdAMI_irBtMTe5F4H-HThQ";
    
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
    
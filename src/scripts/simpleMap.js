mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2ZTEyMSIsImEiOiJjbDFtbGdhbXQwMjl5M2dxb3NjZDZmY3RrIn0.eKtHCBrDiVBbk5mAgjY1sg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-86.90563,14.83503],
zoom: 6
});

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    interactive: false,
    unit: 'metric',
    profile: 'mapbox/driving',
    alternatives: false,
    geometries: 'geojson',
    language: 'es-MX',
    controls: { instructions: false, inputs: false},
    flyTo: false,
    
  });

  
  map.on('load', () => {
    map.addControl(
      directions,
      'top-left'
    );
  if (sessionStorage.getItem("origin") != null && sessionStorage.getItem("destination") != null){
    directions.setOrigin(sessionStorage.getItem("origin"), directions.setDestination(sessionStorage.getItem("destination")));
  }
    
  });
    map.scrollZoom.enable();

  const language = new MapboxLanguage();
map.addControl(language);



document.getElementById("button-route").addEventListener("click", () =>{
window.parent.parent.document.getElementById("principal-container").setAttribute("src", "../ui/map.html");
window.parent.parent.document.getElementById("travels").classList.remove("selected");

window.parent.parent.document.getElementById("service").classList.add("selected");



});
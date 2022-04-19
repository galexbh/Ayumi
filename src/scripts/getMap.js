
var regions = new Map();
regions.set("Tegucigalpa",[-87.20191132492509,14.084703437518472]);
regions.set("Comayagua",[-87.63976730904113,14.44775885131186]);
regions.set("La Ceiba",[-86.78795,15.77990]);





mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2ZTEyMSIsImEiOiJjbDFtbGdhbXQwMjl5M2dxb3NjZDZmY3RrIn0.eKtHCBrDiVBbk5mAgjY1sg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:  [-87.63976730904113,14.44775885131186],
zoom: 12.5
});

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving',
    alternatives: false,
    geometries: 'geojson',
    language: 'es-MX',
    controls: { instructions: false},
    flyTo: false, 
    placeholderOrigin: "Escriba su ubicación o selecciónelo",
    placeholderDestination: "Escriba su destino o selecciónelo", 
    steps: false

  });

  
  
  map.scrollZoom.enable();

  map.on('load', () => {
    map.addControl(
      directions,
      'top-left'
    );
  if (sessionStorage.getItem("origin") != null && sessionStorage.getItem("destination") != null){
    directions.setOrigin(sessionStorage.getItem("origin"), directions.setDestination(sessionStorage.getItem("destination")));
  }
    
  });


  directions.on('route', function(e) {
      document.getElementById("distance").textContent = (e.route[0].distance/1000).toFixed(2) + " km";
      document.getElementById("time").textContent = (Math.floor(e.route[0].duration/60)) + " min";

  });


  const language = new MapboxLanguage();
map.addControl(language);



  let selectedRegion = document.getElementById("select");
  document.getElementById("select").addEventListener("change", () => {
  map.setCenter(regions.get(selectedRegion.options[selectedRegion.selectedIndex].text));

})


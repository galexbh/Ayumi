
var regions = new Map();
regions.set("Tegucigalpa",[-87.20191132492509,14.084703437518472]);
regions.set("Comayagua",[-87.63976730904113,14.44775885131186]);
regions.set("La Ceiba",[-86.79266432025939,15.771179537320865]);





mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2ZTEyMSIsImEiOiJjbDFtbGdhbXQwMjl5M2dxb3NjZDZmY3RrIn0.eKtHCBrDiVBbk5mAgjY1sg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:  [-87.20191132492509,14.084703437518472],
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

  
  
  map.addControl(directions, 'bottom-left');
  map.scrollZoom.enable();

  directions.on('route', function(e) {
      console.log((e.route[0].distance/1000).toFixed(2));
      console.log((Math.floor(e.route[0].duration/60)));
      document.getElementById("prub").innerHTML = (e.route[0].distance/1000).toFixed(2);
  });


  const language = new MapboxLanguage();
map.addControl(language);
map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true
  })
  );

  let selectedRegion = document.getElementById("select");
  document.getElementById("select").addEventListener("change", () => {
  map.setCenter(regions.get(selectedRegion.options[selectedRegion.selectedIndex].text));

})


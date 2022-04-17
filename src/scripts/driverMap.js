mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2ZTEyMSIsImEiOiJjbDFtbGdhbXQwMjl5M2dxb3NjZDZmY3RrIn0.eKtHCBrDiVBbk5mAgjY1sg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:  [-87.63976730904113,14.44775885131186],
zoom: 12.5
});

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    interactive: false,
    unit: 'metric',
    profile: 'mapbox/driving',
    alternatives: false,
    geometries: 'geojson',
    language: 'es-MX',
    controls: { inputs: false, instructions: true},
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
  }});
// Add console.log to check to see if our code is working.
console.log("working");

  // Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/BananaOctopus/Mapping_Earthquakes/main/torontoNeighborhoods.json";

//Grabbing our geojson data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //creating a geojson layer with the retrieved data
    L.geoJSON(data).addTo(map);
});

  // We create the tile layer that will be the background of our map.
  let streets = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {maxZoom: 18,
    accessToken: API_KEY
    }
  );
  
  // We create the dark view tile layer that will be an option for our map.
  let satelliteStreets = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {  MaxZoom: 18,
       accessToken: API_KEY
    }
  );
  
  // Create a base layer that holds both maps.
  let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };
  
  // Create the map object with center, zoom level and default layer.
  let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
  });
  
  // Pass our map layers into our layers control and add the layers control to the map.
  L.control.layers(baseMaps).addTo(map);
  

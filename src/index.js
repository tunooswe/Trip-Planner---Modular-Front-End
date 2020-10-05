import mapboxgl from "mapbox-gl";
import createMarker from "./marker.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiemVybnN0MyIsImEiOiJja2Z3cGQ5YWIwMXZhMnhzY2kxcmF5bnVoIn0.wp2T7Y4OJsyxFHvJQUEBDQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

createMarker("restaurant", [-73.9886, 40.6921]).addTo(map);
createMarker("activity", [-74.006, 40.7128]).addTo(map);
createMarker("hotel", [-73.9745, 40.7645]).addTo(map);

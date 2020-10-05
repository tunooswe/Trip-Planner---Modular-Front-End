import mapboxgl from "mapbox-gl";

export default function createMarker(type, coordinates) {
  let image = "";
  if (type === "hotel") {
    image = "http://i.imgur.com/D9574Cu.png";
  } else if (type === "restaurant") {
    image = "http://i.imgur.com/cqR6pUI.png";
  } else {
    image = "http://i.imgur.com/WbMOfMl.png";
  }

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${image})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

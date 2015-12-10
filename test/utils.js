export const accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q';

export function createMap() {
  var div = document.createElement('div');
  div.setAttribute('id', 'map');
  document.body.appendChild(div);

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8'
  });

  return map;
}

var features = {};

features.line = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'LineString',
    coordinates: [[0, 0], [1, 1]]
  }
};

features.point = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [0, 0]
  }
};

export const features = features;

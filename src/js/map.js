import loadApi from "./modules/loadApi";
import initMapOverlay from "./modules/mapOverlay";

export default function map(parent) {
  const mapElement = parent.querySelector('.js-map');
  if (mapElement) {
    const url = `https://api-maps.yandex.ru/2.1/?apikey=${mapElement.dataset.api}&lang=ru_RU`;
    loadApi('yandex', url, () => {
      ymaps.ready(init);
    });
  }

  initMapOverlay('.js-overlay', 'js-overlay-container');

  let map;

  function init() {
    if(map) {
      map.destroy();
    }

    map = new ymaps.Map(mapElement, {
      center: [mapElement.dataset.initialLongitude, mapElement.dataset.initialLatitude],
      zoom: mapElement.dataset.initialZoom,
      controls: ['zoomControl']
    });

    addPlace(map, {
      coords: [mapElement.dataset.initialLongitude, mapElement.dataset.initialLatitude],
      image: mapElement.dataset.image
    })
  }

  function addPlace(map, {
    coords,
    image
  }) {
    const placemarkProperties = {};

    const placemarkOptions = {
      iconLayout: 'default#image', // pieChart
      iconImageHref: image,
      iconImageSize: [38, 38],
      iconImageOffset: [-19, -19]
    };

    const placemark = new ymaps.Placemark(coords, placemarkProperties, placemarkOptions);

    map.geoObjects.add(placemark);
  }
}

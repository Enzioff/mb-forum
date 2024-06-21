initMap();

async function initMap() {
  await ymaps3.ready;

  const mapContainer = document.getElementById("yandexMap");
  if (!mapContainer) return;
  const { YMap, YMapDefaultSchemeLayer, YMapControls } = ymaps3;
  const { YMapZoomControl } = await ymaps3.import("@yandex/ymaps3-controls@0.0.1");

  const map = new YMap(
    mapContainer,
    {
      zoomRange: { min: 1, max: 20 },
      location: {
        center: [20.159022, 54.945160],

        zoom: 17
      },
      behaviors: ["drag", "pinchZoom", "dblClick"]
    }
  );

  map.addChild(
    new YMapControls({ position: "right" })
      .addChild(new YMapZoomControl({}))
  );
  map.addChild(new YMapDefaultSchemeLayer());
}
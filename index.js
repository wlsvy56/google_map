window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.08852781, lng: -1.96791032 },
    zoom: 100
  });

  const malls = [
    { label: "1", name: "버킹엄 궁전", lat: 51.50127908, lng: -0.14259562 },
    { label: "2", name: "웨스터 민스터 사원", lat: 51.49938155, lng: -0.1275749 },
    { label: "3", name: "빅 벤", lat: 51.5007224, lng: -0.12464027 },
    { label: "4", name: "영국 박물관", lat: 51.51941329, lng: -0.1269566 },
    { label: "5", name: "셜록 홈즈 박물관", lat: 51.523767, lng: -0.15855568 },
    { label: "6", name: "스톤헨지", lat: 51.178882, lng: -1.826215 },
    { label: "7", name: "Greenway House", lat: 50.3818826, lng: -3.5878362 }
  ];

  const bounds = new google.maps.LatLngBounds();
  const infoWindow = new google.maps.InfoWindow();

  malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map
    });
    bounds.extend(marker.position);

    marker.addListener("click", () => {
      map.panTo(marker.position);
      infoWindow.setContent(name);
      infoWindow.open({
        anchor: marker,
        map
      });
    });
  });

  map.fitBounds(bounds);
};

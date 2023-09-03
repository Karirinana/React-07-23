import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import config from "../data/config.json";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import ChangeView from "./ChangeView";
import { useEffect, useState } from "react";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(config.shops)
      .then(responce => responce.json())
      .then(json => setShops(json || []))
  }, []);

  return (
    <div>
      <MapContainer
        className="map"
        center={props.mapCoordinaates.lngLat}
        zoom={props.mapCoordinaates.zoom}
        scrollWheelZoom={false}
      >
        <ChangeView
          center={props.mapCoordinaates.lngLat}
          zoom={props.mapCoordinaates.zoom}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[59.4219, 24.7937]}>
          <Popup>
            Ülemiste keskus. <br /> Avatud 9-20 <br />
            <a href="https://www.google.com/maps/@59.4219242,24.7944756,18z?entry=ttu">
              Suur-Sõjamäe 4, 11415 Tallinn
            </a>
          </Popup>
        </Marker>
        <Marker position={[59.427, 24.7245]}>
          <Popup>
            Kristiine keskus. <br /> Avatud 10-21 <br />
            <a href="https://www.google.com/maps/place/Kristiine+Keskus/@59.4267026,24.7237389,18z/data=!4m6!3m5!1s0x4692948ff56ecd75:0x4f0fde99c451563a!8m2!3d59.4272443!4d24.7230791!16s%2Fm%2F0w7mjwq?entry=ttu">
              Endla 45, 10615 Tallinn
            </a>
          </Popup>
        </Marker>
        <Marker position={[58.378, 26.7306]}>
          <Popup>
            Tasku keskus. <br /> Avatud 10-21 <br />
            <a href="https://www.google.com/maps/place/Tasku+Centre/@58.3777474,26.7297925,17.25z/data=!4m6!3m5!1s0x46eb36de8f30aa61:0xac1894becb0a4ccc!8m2!3d58.3778901!4d26.7308525!16s%2Fg%2F125_j5pv_?entry=ttu">
              Turu 2, 51004 Tartu
            </a>
          </Popup>
        </Marker> */}
        {shops.map ((shop) => 
          <div key={shop.name}>
            <Marker position={[shop.lat, shop.lng]}>
            <Popup>
              {shop.name}<br />{shop.availability}<br />
              <a href={shop.url}>
              {shop.address}
              </a>
            </Popup>
          </Marker>
          </div>)}
      </MapContainer>
    </div>
  );
}

export default Map;

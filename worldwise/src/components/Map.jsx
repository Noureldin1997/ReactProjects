import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCitiesContext } from "../contexts/CitiesContext";
import { useUrlPosition } from "../hooks/useUrlPosition";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useGeolocation } from "../hooks/useGeoLocation";
import Button from "./Button";

const flagemojiToPNG = (flag) => {
  let countryCode =
    String.fromCharCode(flag?.codePointAt(0) - 127397) +
    String.fromCharCode(flag?.codePointAt(2) - 127397);

  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
      alt="flag"
    />
  );
};

function Map() {
  const [position, setPosition] = useState([40, 0]);
  const [lat, lng] = useUrlPosition();
  const {
    isLoading: geoLocationIsLoading,
    position: geoLocationPosition,
    error: geoLocationError,
    getPosition: geoLocationGetPosition,
  } = useGeolocation();

  useEffect(
    function () {
      if (lat === null || lng === null) {
        return;
      } else {
        setPosition([lat, lng]);
      }
    },
    [lat, lng]
  );

  useEffect(
    function () {
      if (geoLocationPosition)
        setPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    },
    [geoLocationPosition]
  );

  const { cities } = useCitiesContext();

  return (
    <div className={styles.mapContainer} /*onClick={() => navigate("form")}*/>
      <Button type="position" onClick={geoLocationGetPosition}>
        {geoLocationIsLoading ? "... loading" : "use your position"}
      </Button>
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              {flagemojiToPNG(city.emoji)} {city.cityName}
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={position} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// ✅ Fix marker issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// 📍 Centres
const centres = [
  { name: "Kota", lat: 25.2138, lng: 75.8648 },
  { name: "Patna", lat: 25.5941, lng: 85.1376 },
  { name: "New Delhi", lat: 28.6139, lng: 77.209 },
  { name: "Noida", lat: 28.5355, lng: 77.391 },
  { name: "Jaipur", lat: 26.9124, lng: 75.7873 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Pune", lat: 18.5204, lng: 73.8567 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Lucknow", lat: 26.8467, lng: 80.9462 },
  { name: "Varanasi", lat: 25.3176, lng: 82.9739 },
  { name: "Indore", lat: 22.7196, lng: 75.8577 },
  { name: "Bhopal", lat: 23.2599, lng: 77.4126 },
  { name: "Nagpur", lat: 21.1458, lng: 79.0882 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { name: "Surat", lat: 21.1702, lng: 72.8311 },
  { name: "Ranchi", lat: 23.3441, lng: 85.3096 },
  { name: "Dhanbad", lat: 23.7957, lng: 86.4304 },
  { name: "Gaya", lat: 24.7955, lng: 85.0002 },
  { name: "Meerut", lat: 28.9845, lng: 77.7064 },
  { name: "Agra", lat: 27.1767, lng: 78.0081 },
  { name: "Aligarh", lat: 27.8974, lng: 78.088 },
  { name: "Gorakhpur", lat: 26.7606, lng: 83.3732 },
  { name: "Jodhpur", lat: 26.2389, lng: 73.0243 },
  { name: "Udaipur", lat: 24.5854, lng: 73.7125 },
  { name: "Amritsar", lat: 31.634, lng: 74.8723 },
  { name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
  { name: "Dehradun", lat: 30.3165, lng: 78.0322 },
  { name: "Shimla", lat: 31.1048, lng: 77.1734 },
  { name: "Srinagar", lat: 34.0837, lng: 74.7973 },
  { name: "Jammu", lat: 32.7266, lng: 74.857 },
  { name: "Raipur", lat: 21.2514, lng: 81.6296 },
  { name: "Bilaspur", lat: 22.0797, lng: 82.1409 },
  { name: "Jabalpur", lat: 23.1815, lng: 79.9864 },
  { name: "Gwalior", lat: 26.2183, lng: 78.1828 },
  { name: "Aurangabad", lat: 19.8762, lng: 75.3433 },
  { name: "Nashik", lat: 19.9975, lng: 73.7898 },
  { name: "Thane", lat: 19.2183, lng: 72.9781 },
  { name: "Faridabad", lat: 28.4089, lng: 77.3178 },
  { name: "Gurgaon", lat: 28.4595, lng: 77.0266 },
  { name: "Sonipat", lat: 28.9931, lng: 77.0151 },
  { name: "Panipat", lat: 29.3909, lng: 76.9635 },
  { name: "Rohtak", lat: 28.8955, lng: 76.6066 },
  { name: "Haldwani", lat: 29.2183, lng: 79.513 },
  { name: "Haridwar", lat: 29.9457, lng: 78.1642 },
];

// 📏 Distance
const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

// 📍 Recenter
const RecenterMap = ({ position }: { position: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (position) map.setView(position, 6);
  }, [position, map]);

  return null;
};

const MapPage = () => {
  const [userLoc, setUserLoc] = useState<[number, number] | null>(null);
  const [nearest, setNearest] = useState<any>(null);
  const [distance, setDistance] = useState<string | null>(null);

  // 🔥 LIVE LOCATION TRACKING
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setUserLoc([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => console.log(err),
      { enableHighAccuracy: true },
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // 📍 Find nearest
  useEffect(() => {
    if (!userLoc) return;

    let closest = null;
    let minDist = Infinity;

    centres.forEach((c) => {
      const dist = getDistance(userLoc[0], userLoc[1], c.lat, c.lng);

      if (dist < minDist) {
        minDist = dist;
        closest = c;
      }
    });

    setNearest(closest);
    setDistance(minDist.toFixed(1));
  }, [userLoc]);

  // 🔵 USER ICON (PULSE STYLE)
  const userDivIcon = L.divIcon({
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="
          width:14px;
          height:14px;
          background:#2563EB;
          border-radius:50%;
          box-shadow:0 0 0 6px rgba(37,99,235,0.3);
        "></div>
        <span style="
          margin-top:4px;
          font-size:12px;
          font-weight:600;
          color:#2563EB;
        ">YOU</span>
      </div>
    `,
    className: "",
  });

  return (
    <div className="h-screen relative">
      {/* 📍 Nearest UI */}
      {nearest && (
        <div className="absolute top-4 left-4 z-[1000] bg-white p-3 rounded shadow">
          <p className="text-primary font-semibold">
            📍 Nearest: {nearest.name}
          </p>
          <p className="text-sm text-gray-600">{distance} km away</p>
        </div>
      )}

      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 📍 Recenter */}
        {userLoc && <RecenterMap position={userLoc} />}

        {/* 🔵 YOU MARKER */}
        {userLoc && (
          <Marker position={userLoc} icon={userDivIcon}>
            <Popup>📍 YOU</Popup>
          </Marker>
        )}

        {/* 📍 Centres */}
        {centres.map((city, i) => {
          const isNearest = nearest?.name === city.name;

          return (
            <Marker key={i} position={[city.lat, city.lng]}>
              <Popup>
                <div>
                  <p className="font-medium">{city.name}</p>

                  {isNearest && (
                    <p className="text-primary text-sm">
                      ⭐ Nearest ({distance} km)
                    </p>
                  )}

                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${city.lat},${city.lng}`,
                      )
                    }
                    className="text-blue-500 text-sm mt-1"
                  >
                    Get Directions →
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapPage;

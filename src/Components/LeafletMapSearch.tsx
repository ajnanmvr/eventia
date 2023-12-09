"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

export default function LeaflefMapSearch() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const handlePlaceSelect = async (query: any) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0]; // Get latitude and longitude of the first result
        setSelectedPlace({ lat, lon } as any);
      }
    } catch (error) {
      console.error("Error fetching place:", error);
    }
  };

  const LocationMarker = () => {
    const map = useMapEvents({
      click: (e: any) => {
        const { lat, lng } = e.latlng;
        setSelectedPlace({ lat, lon: lng } as any);
      },
    });

    return selectedPlace ? (
      <Marker
        position={[(selectedPlace as any).lat, (selectedPlace as any).lon]}
      >
        <Popup>Selected Location</Popup>
      </Marker>
    ) : null;
  };

  return (
    <div style={{ height: "400px" }}>
        <iframe src ={`https://maps.google.com/maps?q=10.305385,77.923029&hl=es;z=14&amp;output=embed`}></iframe>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
      <input
        type="text"
        placeholder="Search for a place..."
        onChange={(e) => handlePlaceSelect(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      {selectedPlace && (
        <div>
          Latitude: {(selectedPlace as any).lat}, Longitude: {(selectedPlace as any).lon}
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [activeAmbulance, setActiveAmbulance] = useState(null);
  const [ambulances, setAmbulances] = useState([]);
  const [routeDetails, setRouteDetails] = useState({ distance: null, duration: null });
  const [transportMode, setTransportMode] = useState('car');
  const mapRef = useRef(null);
  const routingRef = useRef(null);
  const ambulanceMarkersRef = useRef({});
  const userMarkerRef = useRef(null);
  const hospitalLocation = [36.8683, 10.2917]; // Position de l'hôpital pour l'exemple

  // Simulation de données d'ambulances
  useEffect(() => {
    // Exemple de données d'ambulances
    setAmbulances([
      { id: 1, name: 'Ambulance 1', location: [36.891, 10.194] },
      { id: 2, name: 'Ambulance 2', location: [36.860, 10.258] },
      { id: 3, name: 'Ambulance 3', location: [36.905, 10.209] },
    ]);
  }, []);

  // Obtenir la position utilisateur
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        setUserLocation([36.8005, 10.18]); // fallback : Tunis
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Initialisation de la carte
  useEffect(() => {
    if (!mapRef.current && userLocation) {
      mapRef.current = L.map('map').setView(userLocation, 13);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
      }).addTo(mapRef.current);

      L.marker(hospitalLocation, {
        icon: L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/1183/1183179.png', iconSize: [40, 40] }),
      }).addTo(mapRef.current).bindPopup('Hôpital Monji Slim');
    }
  }, [userLocation]);

  // Affichage des marqueurs d'ambulance
  useEffect(() => {
    if (!mapRef.current || !userLocation) return;

    // Marqueur utilisateur
    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
    }

    userMarkerRef.current = L.marker(userLocation, {
      icon: L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/128/9356/9356777.png', iconSize: [40, 40] }),
    }).addTo(mapRef.current).bindPopup('Votre position actuelle');

    // Marqueurs ambulances
    ambulances.forEach((ambulance) => {
      if (!ambulanceMarkersRef.current[ambulance.id]) {
        const marker = L.marker(ambulance.location, {
          icon: L.icon({ iconUrl: '/images/emergency.gif', iconSize: [40, 40] }),
        }).addTo(mapRef.current);
        marker.on('click', () => handleAmbulanceClick(ambulance));
        ambulanceMarkersRef.current[ambulance.id] = marker;
      }
    });
  }, [userLocation, ambulances]);

  // Calcul des temps estimés pour chaque ambulance (exemple basique, on ne calcule pas l'itinéraire ici)
  useEffect(() => {
    if (!userLocation || !ambulances.length) return;

    // Simuler un calcul de temps estimé (par exemple, 10 minutes pour chaque ambulance)
    ambulances.forEach((ambulance) => {
      ambulance.estimatedTime = Math.floor(Math.random() * 15) + 5; // Temps estimé entre 5 et 20 minutes
    });
  }, [userLocation, ambulances]);

  // Gestion du clic sur ambulance
  const handleAmbulanceClick = (ambulance) => {
    setActiveAmbulance(ambulance);
  
    if (routingRef.current) {
      routingRef.current.remove();
    }
  
    routingRef.current = L.Routing.control({
      waypoints: [L.latLng(ambulance.location), L.latLng(userLocation)],
      routeWhileDragging: false,
      createMarker: () => null,
      addWaypoints: false,
      show: false,
      fitSelectedRoutes: true,
      lineOptions: {
        styles: [{ color: 'blue', weight: 5 }],
      },
    })
      .on('routesfound', (e) => {
        const route = e.routes[0];
        if (route?.summary) {
          const duration = Math.round(route.summary.totalTime / 60);
          const distance = (route.summary.totalDistance / 1000).toFixed(2);
          setRouteDetails({ duration, distance });
  
          // ✅ Affichage de la popup une fois la route calculée
          L.popup()
            .setLatLng(ambulance.location)
            .setContent(
              `<b>${ambulance.name}</b><br>Distance: ${distance} km<br>Temps estimé: ${duration} min`
            )
            .openOn(mapRef.current);
        }
      })
      .addTo(mapRef.current);
  };
  

  // Trier les ambulances par estimatedTime
  const sortedAmbulances = [...ambulances].sort((a, b) => a.estimatedTime - b.estimatedTime);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Panel Gauche */}
      <div style={{ width: '300px', backgroundColor: '#f7faff', padding: '20px', overflowY: 'auto', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
        <h3>🧭 Itinéraire</h3>
        <select
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '10px 0', borderRadius: '5px' }}
        >
          <option value="car">🚗 Voiture</option>
          <option value="bike">🚲 Vélo</option>
          <option value="foot">🚶 Marche</option>
        </select>

        {routeDetails.distance && (
          <div style={{ background: '#e9f5ff', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
            <p><strong>Transport :</strong> {transportMode}</p>
            <p><strong>🕒 Temps :</strong> {routeDetails.duration} min</p>
            <p><strong>📏 Distance :</strong> {routeDetails.distance} km</p>
          </div>
        )}

        <h4>Ambulances disponibles :</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {sortedAmbulances.map((a) => (
            <li key={a.id} style={{ background: '#f1f1f1', padding: '10px', margin: '8px 0', borderRadius: '5px' }}>
              <strong>{a.name}</strong><br />
              <p>Temps estimé: {a.estimatedTime ? `${a.estimatedTime} min` : 'Calcul en cours...'}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Carte */}
      <div id="map" style={{ flex: 1 }} />
    </div>
  );
};

export default Map;

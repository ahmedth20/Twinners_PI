import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import AmbulanceService from '../../../services/ambulanceService';
import { Link } from 'react-router-dom';
import { FaCircleCheck } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import {  FaClock, FaRoad } from 'react-icons/fa';
import io from 'socket.io-client';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [ambulances, setAmbulances] = useState([]);
  const [duration, setDuration] = useState(null);
const [distance, setDistance] = useState(null);
  const [activeAmbulance, setActiveAmbulance] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [pendingAmbulance, setPendingAmbulance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const mapRef = useRef(null);
  const routingRef = useRef(null);
  const ambulanceMarkersRef = useRef({});
  const userMarkerRef = useRef(null);
  const hospitalLocation = [36.8683, 10.2917]; // Hôpital Monji Slim
  const socket = io('http://localhost:5000');
  const sendMessage = () => {
    socket.emit('send_message', { message });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setReceivedMessage(data.message);
    });
  }, []);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => setUserLocation([pos.coords.latitude, pos.coords.longitude]),
      () => setUserLocation([36.8005, 10.18]),
      { enableHighAccuracy: true, maximumAge: 0, timeout: 10000000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (!mapRef.current && userLocation) {
      const map = L.map('map').setView(userLocation, 13);
      mapRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB',
      }).addTo(map);

      L.marker(hospitalLocation, {
        icon: L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/1183/1183179.png',
          iconSize: [40, 40],
        }),
      }).addTo(map).bindPopup('Hôpital Monji Slim');
    }
  }, [userLocation]);

  // Récupérer les ambulances disponibles
  useEffect(() => {
    const fetchAmbulances = async () => {
      try {
        const data = await AmbulanceService.getAvailableAmbulances();
        setAmbulances(data); // Mettre à jour les ambulances récupérées
        setLoading(false); // Désactive le chargement après récupération des données
      } catch (error) {
        console.error("Erreur lors de la récupération des ambulances:", error);
        setLoading(false); // Désactive le chargement en cas d'erreur
      }
    };

    fetchAmbulances();
  }, []);

  // Marqueurs utilisateur et ambulances
  useEffect(() => {
    if (!mapRef.current || !userLocation || loading) return;

    // Marqueur utilisateur
    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
    }

    userMarkerRef.current = L.marker(userLocation, {
      icon: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/9356/9356777.png',
        iconSize: [40, 40],
      }),
    }).addTo(mapRef.current).bindPopup('Votre position actuelle');

    // Marqueurs ambulances
    ambulances.forEach((ambulance) => {
      // Vérifier si l'ambulance a une location définie avant d'ajouter le marqueur
      if (ambulance.location && ambulance.location.latitude && ambulance.location.longitude) {
        const ambulanceLocation = [ambulance.location.latitude, ambulance.location.longitude];

        // Ajouter un marqueur pour l'ambulance
        if (!ambulanceMarkersRef.current[ambulance._id]) {
          const marker = L.marker(ambulanceLocation, {
            icon: L.icon({ iconUrl: '/images/emergency.gif', iconSize: [40, 40] }),
          }).addTo(mapRef.current);
          marker.on('click', () => handleAmbulanceClick(ambulance));
          ambulanceMarkersRef.current[ambulance._id] = marker;
        }
      } else {
        console.warn(`Ambulance ${ambulance._id} n'a pas de localisation valide.`);
      }
    });
    
  }, [userLocation, ambulances, loading]);

  const animateAmbulance = (ambulance, route) => {
    const marker = ambulanceMarkersRef.current[ambulance._id];
    if (!marker || !route || !route.coordinates) return;
  
    const coords = route.coordinates;
    const durationSeconds = route.summary.totalTime; // Durée en secondes
    const intervalTime = durationSeconds * 1000 / coords.length; // Temps entre chaque point
  
    let i = 0;
    const interval = setInterval(() => {
      if (i >= coords.length) {
        clearInterval(interval);
        return;
      }
      const { lat, lng } = coords[i];
      marker.setLatLng([lat, lng]);
      i++;
    }, intervalTime);
  };

  const handleAmbulanceClick = (ambulance) => {
    setActiveAmbulance(ambulance);
    if (routingRef.current) routingRef.current.remove();
  
    routingRef.current = L.Routing.control({
      waypoints: [L.latLng(ambulance.location.latitude, ambulance.location.longitude), L.latLng(userLocation)],
      routeWhileDragging: false,
      createMarker: () => null,
      addWaypoints: false,
      show: false,
      fitSelectedRoutes: true,
      lineOptions: { styles: [{ color: 'blue', weight: 5 }] },
    })
    .on('routesfound', (e) => {
      const route = e.routes[0];
      if (route?.summary) {
        const duration = Math.round(route.summary.totalTime / 60); // Temps estimé en minutes
        const distance = (route.summary.totalDistance / 1000).toFixed(2); // Distance en kilomètres
  
        L.popup()
          .setLatLng([ambulance.location.latitude, ambulance.location.longitude])
          .setContent(
            `<b>${ambulance.name}</b><br>Distance: ${distance} km<br>Temps estimé: ${duration} min`
          )
          .openOn(mapRef.current);
  
        // Démarrer l'animation de l'ambulance sur la carte
        animateAmbulance(ambulance, route);
      }
    })
    .addTo(mapRef.current);
  };
  

  const handleAmbulanceCall = (ambulance) => {
    setPendingAmbulance(ambulance);
    setShowConfirmPopup(true);
  };

  const confirmAmbulanceCall = () => {
    if (!pendingAmbulance) return;
    handleAmbulanceClick(pendingAmbulance);

    socket.emit('ambulance-call', {
      ambulanceId: pendingAmbulance._id,
      actuelLocation:` ${userLocation}`, 
      message: `Requesting ambulance ${pendingAmbulance.name} to intervene at your location.`,
    });
  
    handleAmbulanceClick(pendingAmbulance);
  
    setShowConfirmPopup(false);
    setPendingAmbulance(null);
  };

  return (
    
    <div className='bg-BodyBg-0 px-2 lg:px-[30px]'>
        
    <section className="bg-blue-900 bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[700px] lg:h-[700px] xl:h-[790px] 2xl:h-[790px] flex items-center relative z-10 overflow-hidden rounded-t-2xl md:rounded-t-[30px]">
      
      {/* Carte à droite, prend 70% de l'espace */}
      <div id="map" style={{
        position: 'absolute', 
        top: 0, 
        right: 0, // Carte à droite
        width: '75%', // Carte prend 70% de l'espace
        height: '100%',
        zIndex: 1000 // Carte en dessous des autres éléments
      }} />
      
      {/* Contenu (texte) à gauche, prend 30% de l'espace */}
      <div className='Container' style={{ display: 'flex', flex: 1, position: 'relative', zIndex: 1 }}>
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-10 mt-0  mb-40 items-center' style={{ flex: 0.4 }}>
          <div className='relative' data-aos='fade-up' data-aos-duration='1000'>
            <h5 className='font-AlbertSans font-semibold text-lg sm:text-[22px] text-white mt-0 mb-4'>
              Available Ambulances
            </h5>
            
            {/* Liste des ambulances */}
    
          

<div className='grid items-center grid-cols-1 gap-7'>
  {ambulances.map((ambulance, index) => {
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(ambulance.location.latitude, ambulance.location.longitude), // Ambulance position as start point
        L.latLng(userLocation), // User's current position as endpoint
      ],
      routeWhileDragging: false,
      createMarker: () => null,  // Prevent adding markers
      show: false,               // Don't show the route immediately
      lineOptions: {
        styles: [{ color: 'blue', weight: 5 }],
      },
    }).addTo(mapRef.current);
    
    routingControl.on('routesfound', (e) => {
      const route = e.routes[0];
      if (route) {
        const newDuration = Math.round(route.summary.totalTime / 60); // Convert to minutes
        const newDistance = (route.summary.totalDistance / 1000).toFixed(2); // Convert to km
        // Log the information
        console.log(`Distance: ${newDistance} km`);
        setDistance(newDistance);
        console.log(`Estimated Time: ${newDuration} min`);
        setDuration(newDuration);
      }
    });

    return (
<div
  key={ambulance._id}
  className='flex items-center gap-2 cursor-pointer bg-blue-800 text-white rounded-xl p-4 transition duration-300 opacity-90 hover:opacity-100 w-max mr-auto'
  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
  onClick={() => handleAmbulanceCall(ambulance)}
>
        <div className='flex-1'>
          <h5 className='font-DMSans text-white font-bold mb-2'>
            Ambulance - {index + 1}
          </h5>
          <div className='items-center '>
          <p className='flex '>
              <FaClock size={'18'} className='text-PrimaryColor-0' />
              <h5 className='font-DMSans text-white ml-2'>
                Estimated Time: {duration !== null ? `${duration} min` : 'Calculating...'}
              </h5>
          </p>
          <p className='flex '> 
              <FaRoad size={'18'} className='text-PrimaryColor-0' />
              <h5 className='font-DMSans text-white ml-2'>
                Distance: {distance !== null ? `${distance} km` : 'Calculating...'}
              </h5>
          </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
            
            <Link to={'/about'}>
              <button className='primary-btn mt-20'>
                More About
                <GoArrowRight size={'22'} className='-rotate-45' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>


    {showConfirmPopup && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', alignItems: 'center',
    justifyContent: 'center', zIndex: 1000
  }}>
    <div style={{
      backgroundColor: 'white', padding: '30px', borderRadius: '8px', width: '350px',
      textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <h3 style={{ marginBottom: '15px' }}>Call {pendingAmbulance?.name}?</h3>
      <p style={{ marginBottom: '25px' }}>Would you like to request their intervention?</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <button 
          onClick={() => setShowConfirmPopup(false)} 
          className='primary-btn' 
          style={{
            padding: '10px 20px', width: '48%', backgroundColor: '#ccc', border: 'none', borderRadius: '5px',
            textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
        >
          Cancel
        </button>
        <button 
          className='primary-btn' 
          onClick={confirmAmbulanceCall} 
          style={{
            padding: '10px 20px', width: '48%', backgroundColor: '#4CAF50', border: 'none', borderRadius: '5px', color: '#fff',
            textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}

<div className="App">
      <h2>Frontend App 1</h2>
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p>Received: {receivedMessage}</p>
    </div>
      
</div>
    
  );
};

export default Map;

import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import AmbulanceService from '../../../services/ambulanceService';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import {  FaClock, FaRoad } from 'react-icons/fa';
import CalculDistance  from './CalculDistance';
import CallAmbulance from '../Notifications/CallAmbulance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [ambulances, setAmbulances] = useState([]);
  const [activeAmbulance, setActiveAmbulance] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [pendingAmbulance, setPendingAmbulance] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);
  const routingRef = useRef(null);
  const ambulanceMarkersRef = useRef({});
  const userMarkerRef = useRef(null);
  const hospitalLocation = [36.8683, 10.2917]; 
  const [ambulanceDistances, setAmbulanceDistances] = useState([]);
  const [showCallAmbulance, setShowCallAmbulance] = useState(false);
  const [selectedAmbulanceId, setSelectedAmbulanceId] = useState(localStorage.getItem('selectedAmbulanceId') || null);
  const [updatedDistances, setUpdatedDistances] = useState(ambulanceDistances);
  const [updatedTimes, setUpdatedTimes] = useState(ambulanceDistances);

  useEffect(() => {
    const interval = setInterval(() => {
      // Mettre à jour la distance et le temps estimé en fonction des nouvelles informations
      setUpdatedDistances(prevDistances => {
        // Mettez ici la logique pour calculer la nouvelle distance en temps réel
        // Exemple : mis à jour aléatoire ou basé sur des données en temps réel
        return prevDistances.map((dist, index) => ({
          ...dist,
          distanceKm: dist.distanceKm + (Math.random() * 0.5),  // Simule un déplacement
          durationMin: dist.durationMin - 1, // Diminue la durée (simulé)
        }));
      });

      setUpdatedTimes(prevTimes => {
        return prevTimes.map((time, index) => ({
          ...time,
          durationMin: time.durationMin - 1, // Diminue la durée (simulé)
        }));
      });
    }, 10000);  // Actualise toutes les 10 secondes (peut être ajusté)

    // Nettoyage de l'intervalle lorsque le composant est démonté ou mis à jour
    return () => clearInterval(interval);
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
  useEffect(() => {
    const fetchAmbulances = async () => {
      try {
        const data = await AmbulanceService.getAvailableAmbulances();
  
        // 👉 Insère ce bloc ici pour restaurer les positions sauvegardées
        data.forEach(amb => {
          const savedPos = JSON.parse(localStorage.getItem(`ambulance_pos_${amb._id}`));
          if (savedPos) {
            amb.location.latitude = savedPos.lat;
            amb.location.longitude = savedPos.lng;
          }
        });
  
        setAmbulances(data); 
        setLoading(false); 
      } catch (error) {
        console.error("Erreur lors de la récupération des ambulances:", error);
        setLoading(false); 
      }
    };
    fetchAmbulances();
  }, []);
  
  useEffect(() => {
    if (!mapRef.current || !userLocation || loading) return;
    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
    }
    userMarkerRef.current = L.marker(userLocation, {
      icon: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/9356/9356777.png',
        iconSize: [40, 40],
      }),
    }).addTo(mapRef.current).bindPopup('Votre position actuelle');

    ambulances.forEach((ambulance) => {
      if (ambulance.location && ambulance.location.latitude && ambulance.location.longitude) {
        const ambulanceLocation = [ambulance.location.latitude, ambulance.location.longitude];
        if (!ambulanceMarkersRef.current[ambulance._id]) {
          const marker = L.marker(ambulanceLocation, {
            icon: L.icon({ iconUrl: '/images/emergency.gif', iconSize: [40, 40] }),
          }).addTo(mapRef.current);
          marker.on('click', () => handleAmbulancePopUp(ambulance));
          ambulanceMarkersRef.current[ambulance._id] = marker;
        }
      } else {
        console.warn(`Ambulance ${ambulance._id} n'a pas de localisation valide.`);
      }
    });
  }, [userLocation, ambulances, loading]);
  useEffect(() => {
    if (mapRef.current && ambulances) {
      ambulances.forEach((ambulance, index) => {
        CalculDistance(mapRef.current, ambulance.location.latitude, ambulance.location.longitude ,userLocation,({ distanceKm, durationMin }) => {
          setAmbulanceDistances((prevState) => {
            const updatedDistances = [...prevState];
            updatedDistances[index] = { distanceKm, durationMin };
            return updatedDistances;
          });
        });
      });
    }
  }, [ambulances, mapRef]);
  useEffect(() => {
    if (!mapRef.current || !userLocation || loading) return;
  
    const fetchDistances = async () => {
      const distancePromises = ambulances.map((ambulance) =>
        new Promise((resolve) => {
          if (ambulance?.location?.latitude && ambulance?.location?.longitude) {
            CalculDistance(
              mapRef.current,
              ambulance.location.latitude,
              ambulance.location.longitude,
              userLocation,
              ({ distanceKm, durationMin }) => {
                resolve({ ambulance, distanceKm, durationMin });
              }
            );
          } else {
            resolve({ ambulance, distanceKm: Infinity, durationMin: Infinity });
          }
        })
      );
  
      const results = await Promise.all(distancePromises);
  
      // Trier par distance
      results.sort((a, b) => a.distanceKm - b.distanceKm);
  
      // Mettre à jour les deux états
      setAmbulances(results.map((res) => res.ambulance));
      setAmbulanceDistances(results.map(({ distanceKm, durationMin }) => ({ distanceKm, durationMin })));
    };
  
    fetchDistances();
  }, [ambulances.length, userLocation, loading]);
  
  const animateAmbulance = (ambulance, route) => {
    const marker = ambulanceMarkersRef.current[ambulance._id];
    if (!marker || !route || !route.coordinates) return;

    const coords = route.coordinates;
    const durationSeconds = route.summary.totalTime;
    const totalDistanceKm = route.summary.totalDistance / 1000;
    const intervalTime = (durationSeconds * 1000) / coords.length;
    let i = 0;

    let remainingDistance = totalDistanceKm;
    let remainingTime = Math.ceil(durationSeconds / 60);

    // Polyline dynamique
    let dynamicLine = L.polyline(coords, { color: 'blue', weight: 5 }).addTo(mapRef.current);

    const interval = setInterval(() => {
        if (i >= coords.length) {
            clearInterval(interval);
            marker.setLatLng(coords[coords.length - 1]);
            routingRef.current?.remove();
            mapRef.current.removeLayer(dynamicLine);
            return;
        }

        const { lat, lng } = coords[i];
        marker.setLatLng([lat, lng]);
        localStorage.setItem(`ambulance_pos_${ambulance._id}`, JSON.stringify({ lat, lng }));

        // Distance à la position patient
        const distanceToPatient = L.latLng(lat, lng).distanceTo(L.latLng(userLocation));
        const ARRIVAL_RADIUS_METERS = 40;

        if (distanceToPatient < ARRIVAL_RADIUS_METERS) {
         // console.log("arriveee");
         // alert('arrivee');
          toast.success("🚑 L'ambulance est proche de vous (à l'entrée) !", {
            position: "top-center",
            autoClose: false,    
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
           clearInterval(interval);
            routingRef.current?.remove();
            mapRef.current.removeLayer(dynamicLine);
            return;
        }
        

        // Mise à jour du tracé restant
        const remainingCoords = coords.slice(i);
        dynamicLine.setLatLngs(remainingCoords);

        // Met à jour le popup
        remainingDistance = totalDistanceKm * (1 - (i / coords.length));
        remainingTime = Math.ceil((remainingDistance / totalDistanceKm) * (durationSeconds / 60));
        marker.bindPopup(
            `<b>${ambulance.name}</b><br>Distance restante: ${remainingDistance.toFixed(2)} km<br>Temps restant: ${remainingTime} min`
        ).openPopup();

        i++;
    }, intervalTime);
};


const handleRealTimeTrack = (ambulance) => {
    const intervalTime = 1000; // Intervalle d'actualisation toutes les secondes
    let i = 0; // Assurez-vous que "i" est initialisé
    const coords = ambulance.coordinates; // Coordonnées du trajet
    const totalDistanceKm = ambulance.totalDistanceKm; // Distance totale en km
    const durationSeconds = ambulance.durationSeconds; // Durée totale en secondes
    let remainingDistance, remainingTime;

    const marker = ambulanceMarkersRef.current[ambulance._id]; // Récupère le marqueur de l'ambulance

    const updatePopup = () => {
        L.popup()
            .setLatLng([marker.getLatLng().lat, marker.getLatLng().lng])
            .setContent(
                `<b>${ambulance.name}</b><br>Distance restante: ${remainingDistance.toFixed(2)} km<br>Temps restant: ${remainingTime} min`
            )
            .openOn(mapRef.current);
    };

    // Mettre à jour la position de l'ambulance et la popup à chaque seconde
    const interval = setInterval(() => {
        if (i >= coords.length) {
            clearInterval(interval); // Arrête l'intervalle si tous les points sont parcourus
            routingRef.current && routingRef.current.remove(); // Supprimer la ligne du trajet
            return;
        }

        const { lat, lng } = coords[i];
        marker.setLatLng([lat, lng]); // Déplace l'ambulance

        // Calcul de la distance restante et du temps restant
        remainingDistance = totalDistanceKm * (1 - (i / coords.length));
        remainingTime = Math.ceil((remainingDistance / totalDistanceKm) * (durationSeconds / 60));

        // Met à jour la popup avec les nouvelles informations
        updatePopup();

        i++; // Passe au point suivant
    }, intervalTime);
};

const handleAmbulanceClick = (ambulance) => {
  setActiveAmbulance(ambulance);
  if (mapRef.current && userLocation) {
    L.circle(userLocation, {
        color: 'green',
        fillColor: '#2ecc71',
        fillOpacity: 0.2,
        radius: 80 // rayon de détection d'arrivée
    }).addTo(mapRef.current);
  }
  if (routingRef.current) routingRef.current.remove();

  const currentAmbulanceMarker = ambulanceMarkersRef.current[ambulance._id];
  const currentPosition = currentAmbulanceMarker
      ? currentAmbulanceMarker.getLatLng()
      : L.latLng(ambulance.location.latitude, ambulance.location.longitude);

  CalculDistance(
      mapRef.current,
      currentPosition.lat,
      currentPosition.lng,
      userLocation,
      ({ distanceKm, durationMin }) => {
          L.popup()
              .setLatLng(currentPosition)
              .setContent(
                  `<b>${ambulance.name}</b><br>Distance: ${distanceKm} km<br>Temps estimé: ${durationMin} min`
              )
              .openOn(mapRef.current);

          routingRef.current = L.Routing.control({
              waypoints: [
                  L.latLng(currentPosition.lat, currentPosition.lng),
                  L.latLng(userLocation)
              ],
              routeWhileDragging: false,
              createMarker: () => null,
              addWaypoints: false,
              show: false,
              fitSelectedRoutes: true,
              lineOptions: { styles: [{ color: 'blue', weight: 5 }] },
          })
          .on('routesfound', (e) => {
              const route = e.routes[0];
              animateAmbulance(ambulance, route);
          })
          .addTo(mapRef.current);
      }
  );
};


const handleAmbulancePopUp = (ambulance) => {
  setActiveAmbulance(ambulance);

  // Retirer l'ancien trajet s'il existe
  if (routingRef.current) routingRef.current.remove();

  // Calcul de la distance et du temps avec la méthode CalculDistance
  CalculDistance(mapRef.current, ambulance.location.latitude, ambulance.location.longitude, userLocation, ({ distanceKm, durationMin }) => {
      // Ouvre un popup avec les informations sur l'ambulance
      L.popup()
          .setLatLng([ambulance.location.latitude, ambulance.location.longitude])
          .setContent(
              `<b>${ambulance.name}</b><br>Distance: ${distanceKm} km<br>Temps estimé: ${durationMin} min`
          )
          .openOn(mapRef.current);

      // Crée un contrôle de routage pour l'ambulance
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
          // Démarre l'animation de l'ambulance avec le trajet trouvé
       
      })
      .addTo(mapRef.current);
  });
};
const handleAmbulanceCall = (ambulance) => {

  setPendingAmbulance(ambulance);
  console.log('Pending Ambulance:', ambulance); // Add this line to check the data
  setShowConfirmPopup(true);
};

  /*const confirmAmbulanceCall = () => {
    if (!pendingAmbulance) return;
  
    const ambulanceToCall = pendingAmbulance; // on le garde dans une variable temporaire
  console.log(pendingAmbulance);
    handleAmbulanceClick(ambulanceToCall);
    setShowConfirmPopup(false);
    setShowCallAmbulance(true);
    setPendingAmbulance(null);
    handleRealTimeTrack(ambulanceToCall);
  };
  */
  const handleAmbulanceResponse = (data) => {
    if (data.status === 'accepted') {
      setSelectedAmbulanceId(pendingAmbulance?._id);
      localStorage.setItem('selectedAmbulanceId', pendingAmbulance?._id);
   //   alert('Le paramedic a accepté la demande.');
      toast.success("🚑Le paramedic a accepté la demande.", {
        position: "top-center",
        autoClose: false,    
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      handleAmbulanceClick(pendingAmbulance);
      handleRealTimeTrack(pendingAmbulance);
      setShowConfirmPopup(false)

    } else {
    //  alert('Le paramedic a refusé la demande.');
    toast.error("🚑 Le paramedic a refusé la demande.", {
      position: "top-center",
      autoClose: false,           // 🔒 Ne se ferme pas automatiquement
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
    setShowCallAmbulance(false); // Masque le composant
  };

}

  return (
    <div className='bg-BodyBg-0 px-2 lg:px-[30px]'>
    <section className="bg-blue-900 bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[700px] lg:h-[700px] xl:h-[790px] 2xl:h-[790px] flex items-center relative z-10 overflow-hidden rounded-t-2xl md:rounded-t-[30px]">
      <div id="map" style={{
        position: 'absolute', 
        top: 0, 
        right: 0, 
        width: '80%',
        height: '100%',
        zIndex: 1000 
      }} />
      <div className='Container' style={{ display: 'flex', flex: 1, position: 'relative', zIndex: 1 }}>
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-10 mt-0  mb-40 items-center' style={{ flex: 0.4 }}>
          <div className='relative' data-aos='fade-up' data-aos-duration='1000'>
            <h5 className='font-AlbertSans font-semibold text-lg sm:text-[22px] text-white mt-0 mb-4'>
              Available Ambulances
            </h5>
            <div className='grid items-center grid-cols-1 gap-7'>
  {ambulances
    .map((ambulance, index) => {
      // Récupère les valeurs de distance et de durée en fonction de l'ambulance
      const { distanceKm, durationMin } = ambulanceDistances[index] || { distanceKm: null, durationMin: null };

      return (
        <div
          key={ambulance._id}
          className={`flex items-center gap-2 cursor-pointer bg-blue-800 text-white rounded-xl p-4 transition duration-300 opacity-90 hover:opacity-100 w-max mr-auto ${selectedAmbulanceId === ambulance._id ? 'bg-green-600' : ''}`}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => handleAmbulanceCall(ambulance)}
        >
          <div className='flex-1'>
            <h5 className='font-DMSans text-white font-bold mb-2'>
              Ambulance - {index + 1}
            </h5>
            <p className='flex'>
              <FaClock size={'18'} className='text-PrimaryColor-0' />
              <h5 className='font-DMSans text-white ml-2'>
                Estimated Time: {durationMin !== null ? `${durationMin} min` : 'Calculating...'}
              </h5>
            </p>
            <p className='flex'>
              <FaRoad size={'18'} className='text-PrimaryColor-0' />
              <h5 className='font-DMSans text-white ml-2'>
                Distance: {distanceKm !== null ? `${distanceKm} km` : 'Calculating...'}
              </h5>
            </p>
            {selectedAmbulanceId === ambulance._id && (
              <p className="text-green-400 font-bold mt-2">Already accepted</p>
            )}
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
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      width: '350px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowConfirmPopup(false)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: '#666'
        }}
        aria-label="Close popup"
      >
        ×
      </button>

      {/* POPUP CONTENT */}
      <h3 style={{ marginBottom: '15px' }}>Call {pendingAmbulance?.name}?</h3>
      <p style={{ marginBottom: '25px' }}>Would you like to request their intervention?</p>

      {/* Button Container to center CallAmbulance */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <CallAmbulance
          ambulance={pendingAmbulance}
          onResponse={(data) => {
            setShowConfirmPopup(false);
            handleAmbulanceResponse(data);
          }}
        />
      </div>
    </div>
  </div>
)}




</div>
  );
};
export default Map;

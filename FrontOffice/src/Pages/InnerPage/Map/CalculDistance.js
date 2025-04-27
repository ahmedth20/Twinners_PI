import L from 'leaflet';
import 'leaflet-routing-machine';

function CalculDistance(map, fromLat, fromLng, currentLocation, callback) {
    const from = L.latLng(fromLat, fromLng);
    const currentLocationLatLng = L.latLng(currentLocation); // Utilisation de currentLocation en latLng

    // Création du contrôle de routing
    const routeControl = L.Routing.control({
        waypoints: [from, currentLocationLatLng],
        router: L.Routing.mapbox('pk.eyJ1IjoieW9zcmNoYXJlayIsImEiOiJjbGhtbW8xNmsweW9oM3JvZGJkZGxhNHR1In0.UcpgOwZYv8kF4BkB1iL7gg'),
        createMarker: () => null,
        addWaypoints: false,
        routeWhileDragging: false,
        fitSelectedRoutes: false,
        show: false,
    });

    // Fonction pour mettre à jour la distance et le temps estimé en temps réel
    routeControl.on('routesfound', function (e) {
        const route = e.routes[0];
        const totalDistance = (route.summary.totalDistance / 1000).toFixed(2); // Distance en km
        const totalTime = Math.ceil(route.summary.totalTime / 60); // Durée en minutes

        // Appel du callback pour mettre à jour la distance et le temps estimé
        callback({ distanceKm: totalDistance, durationMin: totalTime });
        routeControl.remove();
    });

    // Ajouter à la carte
    routeControl.addTo(map);

    // Retourner l'objet de contrôle pour pouvoir interagir avec lui plus tard
    return routeControl;
}

export default CalculDistance;

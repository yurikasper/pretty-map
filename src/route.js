import { waypointIcons } from "./custom_icons";

//adds route to map based on provided waypoints and color
export default function addRoute(map, waypoints, color) {
    L.Routing.control({
        waypoints: waypoints,
        lineOptions: {
            styles: [{color: 'gray', opacity: 1, weight: 5}, {color: color, opacity: 1, weight: 3}]
         },
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        router: L.Routing.osrmv1({
            serviceUrl: 'https://routing.openstreetmap.de/routed-foot/route/v1'
        }),
        createMarker: function(i, wp, nWps) {
            if (i === 0) {
                return L.marker(wp.latLng, {icon: waypointIcons.A });
            } else if (i === 1) {
                return L.marker(wp.latLng, {icon: waypointIcons.B });
            } else {
                return L.marker(wp.latLng, {icon: waypointIcons.blank });
            }
        }
    }).addTo(map);
}
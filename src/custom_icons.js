import waypoint from './assets/waypoint.png'
import waypointA from './assets/waypoint_a.png'
import waypointB from './assets/waypoint_b.png'
import dummyShadow from './assets/dummy_shadow.png'

//define base custom waypoint
var waypointIcon = L.Icon.extend({
    options: {
        iconSize:     [48, 48],
        iconAnchor:   [24, 48],
        popupAnchor:  [0, -48],
        shadowUrl: dummyShadow,
        shadowSize:   [1, 1],
        shadowAnchor: [0, 0]
    }
});

//create waypoints using images
var waypointIconA = new waypointIcon({iconUrl: waypointA}),
    waypointIconB = new waypointIcon({iconUrl: waypointB}),
    waypointIconBlank = new waypointIcon({iconUrl: waypoint});

//export custom waypoint icons
export var waypointIcons = {
    A: waypointIconA,
    B: waypointIconB,
    blank: waypointIconBlank
}
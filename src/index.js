//UI imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@melloware/coloris/dist/coloris.css";
import Coloris from "@melloware/coloris";

//Map imports
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-simple-map-screenshoter';

import './style.css'
import initControls from "./controls";
import addRoute from "./route";
import mapVariables from "./variableMap";
import { tileProvider } from "./tile_provider";

window.addEventListener("load", () => {
    //initialize map
    var map = L.map('map').setView([0, 0], 2);

    //add tile provider defined in tile_provider.js
    tileProvider.addTo(map);

    //example route
    addRoute(map, [
        L.latLng(40.755, -73.975),
        L.latLng(40.778, -73.962)
    ], 'var(--route-color)');

    //initialize controls
    initControls();

    //add color picker
    Coloris.init();
    Coloris({el: '#route-color'});

    //add screenshot button
    L.simpleMapScreenshoter().addTo(map);

    //map CSS varibles to input fields
    mapVariables();

});
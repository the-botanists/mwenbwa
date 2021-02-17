import React from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet"; // Marker, Popup, useMap
import MarkerClusterGroup from "react-leaflet-markercluster";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
// import TreesMarkers from "./marker";
import GetMarker from "./marker2";

// let currentView = useMap(map.getBounds())

function makeACall(bounds, zoom, zoomThreshold = 16) {
    console.log(`Current map zoom is ${zoom}`);
    if (zoom > zoomThreshold) {
        console.log("make a call to the server with the bounds:", bounds);
        // currentZoom = zoom
    }
}

const MapEvents = () => {
    const map = useMapEvents({
        moveend: () => makeACall(map.getBounds(), map.getZoom()),
        zoomend: () => makeACall(map.getBounds(), map.getZoom()),
    });
    return null;
};

const SetMarker = GetMarker;

function GameMap() {
    const position = [50.6283, 5.5768];
    return (
        <MapContainer
            id={"leafletContainer"}
            center={position}
            zoom={17}
            minZoom={12}
            maxZoom={18}
            scrollWheelZoom={true}>
            <MapEvents />
            <TileLayer
                url={
                    // 'https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    // "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                    "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    // 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' // 20 COM
                    // "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" //20 COM
                    // "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" // maxZoom: 16,
                    // 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png' // 18 - 17
                    //'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png' // 19
                    // 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png' // 19
                    // 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' // COM
                    // 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}' // COM
                }
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
                spiderfyOnMaxZoom={false}
                showCoverageOnHover={false}
                zoomToBoundsOnClick={false}
                disableClusteringAtZoom={17}>
                <SetMarker />
            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default GameMap;

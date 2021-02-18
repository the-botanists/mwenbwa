import React from "react";
import {MapContainer, TileLayer} from "react-leaflet"; // Marker, Popup,
import MarkerClusterGroup from "react-leaflet-markercluster";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
// import TreesMarkers from "./marker";

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
                {/* <TreesMarkers /> */}
            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default GameMap;

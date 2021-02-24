import React from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet"; // Marker, Popup, useMap
import MarkerClusterGroup from "react-leaflet-markercluster";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
// import GetMarker from "./marker";
import {GetMarker} from "./marker2";

const infoCenter = bcenter => {
    console.log("Center : ", bcenter);
    return Object.values(bcenter);
};

const MapEvents = () => {
    const map = useMapEvents({
        moveend: () => infoCenter(map.getCenter()),
        zoomend: () => infoCenter(map.getCenter()),
    });
    return null;
};
const setCurrentCenter = [50.62231133913421, 5.563437938690186];
// const SetMarker = TreesMarkers dataParentToChild={<MapEvents />} ;
//const SetMarker = GetMarker data={setCurrentCenter}

// function MyComponent() {
//     const map = useMap();
//     console.log("map center:", map.getCenter());
//     return map.getCenter();
// }

function GameMap() {
    const position = [50.6283, 5.5768];
    return (
        <MapContainer
            id={"leafletContainer"}
            center={position}
            zoom={17}
            minZoom={12}
            maxZoom={18}
            // style={{ height: "100vh", width: "100vw" }}
            scrollWheelZoom={true}>
            <MapEvents />
            <TileLayer
                url={
                    // 'https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    // "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                    "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    // "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" // maxZoom: 16,
                    // 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png' // 18 - 17
                    //'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png' // 19
                    // 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png' // 19
                }
            />
            <MarkerClusterGroup
                spiderfyOnMaxZoom={false}
                showCoverageOnHover={false}
                zoomToBoundsOnClick={false}
                disableClusteringAtZoom={17}>
                {/* <MyComponent /> */}
                <GetMarker
                    CurrentCenter={setCurrentCenter}
                    // CurrentCenter={setCurrentCenter}
                    // para2={<MapEvents />}
                />
            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default GameMap;

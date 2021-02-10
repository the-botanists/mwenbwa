import React from "react";
import {MapContainer, TileLayer} from "react-leaflet"; // Marker, Popup,
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/css/map.css";

function GameMap() {
    const position = [50.6283, 5.5768];
    return (
        <MapContainer
            id={"leafletContainer"}
            center={position}
            zoom={16}
            minZoom={8}
            maxZoom={17}
            scrollWheelZoom={true}>
            <TileLayer
                url={
                    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
                }
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
}

export default GameMap;

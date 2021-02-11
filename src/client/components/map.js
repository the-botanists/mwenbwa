import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"; //
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/css/map.css";
//import TreeImage from "../assets/img/arbre.svg";
import TreeImage from "../assets/img/watercolor-tree1.png";

function GameMap() {
    const position = [50.6283, 5.5768];
    const treeIcon = L.icon({
        iconUrl: TreeImage,
        iconSize: [30, 40], // size of the icon
        iconAnchor: [17, 0], // point of the icon which will correspond to marker's location
        popupAnchor: [17, 0], // point from which the popup should open relative to the iconAnchor
        // shadowUrl: 'leaf-shadow.png',
        //shadowSize:   [50, 64], // size of the shadow
        // shadowAnchor: [4, 62],  // the same for the shadow
    });
    return (
        <MapContainer
            id={"leafletContainer"}
            center={position}
            zoom={16}
            minZoom={10}
            maxZoom={17}
            scrollWheelZoom={true}>
            <TileLayer
                url={
                    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
                }
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={treeIcon} position={position}>
                <Popup>
                    {"I'm a Tree"}
                    <br />
                    {"More info soon"}
                    <button type={"button"} className={"button is-success"}>
                        {"Success"}
                    </button>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default GameMap;

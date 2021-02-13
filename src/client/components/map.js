import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"; //
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
//import TreeImage from "../assets/img/arbre.svg";
import TreeImage from "../assets/img/watercolor-tree1.png";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(response => response.json());

function GameMap() {
    const urlAllTree = "/api/trees";
    const {data, error} = useSWR(urlAllTree, {fetcher});
    const allTreesData = data && !error ? data.slice() : [];

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
    function fixLatinName(treeLatinName) {
        let latinName = treeLatinName.split(` X `)[0];
        latinName = latinName.split(` x `)[0];
        latinName = latinName.split(` '`)[0];
        return latinName;
    }

    const markerTree = allTreesData.map(tree => (
        <Marker
            key={tree._id.$oid}
            icon={treeIcon}
            position={tree.location.coordinates}>
            <Popup>
                {"I'm a Tree"}
                <br />
                {"More info soon"}
                <p>
                    <a
                        href={`https://en.wikipedia.org/wiki/${fixLatinName(
                            tree.latinName,
                        )}`}
                        target={"_blank"}
                        rel={"noreferrer"}>
                        {"Wiki info"}
                    </a>
                </p>
                <button type={"button"} className={"button is-success"}>
                    {"Success"}
                </button>
            </Popup>
        </Marker>
    ));

    return (
        <MapContainer
            id={"leafletContainer"}
            center={position}
            zoom={17}
            minZoom={13}
            maxZoom={18}
            scrollWheelZoom={true}>
            <TileLayer
                url={
                    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
                }
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
                spiderfyOnMaxZoom={false}
                showCoverageOnHover={false}
                zoomToBoundsOnClick={false}
                disableClusteringAtZoom={16}>
                {markerTree}
            </MarkerClusterGroup>
            {/* {allTreesData.map((tree) => (
                <Marker key={tree._id.$oid} icon={treeIcon} position={tree.location.coordinates}>
                </Marker>
            ))} */}
        </MapContainer>
    );
}

export default GameMap;

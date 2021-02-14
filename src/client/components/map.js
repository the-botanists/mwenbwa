import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"; //
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
//import TreeImage from "../assets/img/arbre.svg";
import TreeImage0 from "../assets/img/watercolor-tree1.png";
import TreeImage1 from "../assets/img/watercolor-tree2.png";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(response => response.json());

function GameMap() {
    const urlAllTree = "/api/trees";
    const {data, error} = useSWR(urlAllTree, {fetcher});
    const allTreesData = data && !error ? data.slice() : [];

    function randtreeIcon() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        const rand2 = getRandomInt(2);
        if (rand2 === 1) {
            const treeIcon = L.icon({
                iconUrl: TreeImage0,
                iconSize: [30, 40], // size of the icon
                iconAnchor: [17, 0], // point of the icon which will correspond to marker's location
                popupAnchor: [17, 0], // point from which the popup should open relative to the iconAnchor
            });
            return treeIcon;
        }
        const treeIcon = L.icon({
            iconUrl: TreeImage1,
            iconSize: [30, 40], // size of the icon
            iconAnchor: [17, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [17, 0], // point from which the popup should open relative to the iconAnchor
        });
        return treeIcon;
    }

    const position = [50.6283, 5.5768];

    function fixLatinName(treeLatinName) {
        let latinName = treeLatinName.split(` X `)[0];
        latinName = latinName.split(` x `)[0];
        latinName = latinName.split(` '`)[0];
        return latinName;
    }

    const markerTree = allTreesData.map(tree => (
        <Marker
            key={tree._id.$oid}
            icon={randtreeIcon()}
            position={tree.location.coordinates}>
            <Popup>
                {"I'm a Tree"}
                <br />
                <p>
                    {"Value : "}
                    {parseInt((tree.circonf / 3.1421) * tree.height)}
                    {" leafs"}{" "}
                </p>
                <p>
                    {fixLatinName(tree.latinName)}{" "}
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
                    {"Buy"}
                </button>
            </Popup>
        </Marker>
    ));

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

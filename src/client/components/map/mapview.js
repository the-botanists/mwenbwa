import React, {useState, useEffect} from "react"; // useMap, useMapEvents
import {
    MapContainer,
    TileLayer,
    useMapEvents,
    Marker,
    Popup,
} from "react-leaflet"; // Marker, Popup, useMap
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import axios from "axios";
// import {} from "react-leaflet"; // MapContainer, TileLayer
import TreeImage1 from "../../assets/img/watercolor-tree2.png";
import {Formik, Form} from "formik"; // Field

let curLocation = [50.6283, 5.5768];

const infoCenter = bcenter => {
    curLocation = Object.values(bcenter);
    return Object.values(bcenter);
};

const MapEvents = () => {
    const map = useMapEvents({
        moveend: () => infoCenter(map.getCenter()),
        zoomend: () => infoCenter(map.getCenter()),
    });
    return null;
};

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
                <GetMarker />
            </MarkerClusterGroup>
        </MapContainer>
    );
}

// MARKER

const treeIcon = L.icon({
    iconUrl: TreeImage1,
    iconSize: [30, 40], // size of the icon
    iconAnchor: [17, 0], // point of the icon which will correspond to marker's location
    popupAnchor: [17, 0], // point from which the popup should open relative to the iconAnchor
});

function fixLatinName(treeLatinName) {
    let latinName = treeLatinName.split(` X `)[0];
    latinName = latinName.split(` x `)[0];
    latinName = latinName.split(` '`)[0];
    return latinName;
}

function coolName(testCoolName) {
    if (testCoolName) {
        return testCoolName;
    }
    return "a free tree";
}
let Justebuy;
const latMin = center => center[0] - 0.003;
const latMax = center => center[0] + 0.003;
const lonMin = center => center[1] - 0.0045;
const lonMax = center => center[1] + 0.0045;

const GetMarker = () => {
    // CurrentCenter, para2
    const [error, setError] = useState(null);
    const [treesmarker, setTreesmarker] = useState([]);
    // const [curLocation, setCurLocation] = useState([]);
    // console.log(allTreesGetData);
    useEffect(() => {
        axios
            .get("/api/trees/all")
            .then(response => {
                setTreesmarker(response.data);
            })
            // })
            .catch(() => {
                // console.log("Error retrieving data!!!");
                setError(error);
                console.log(error);
            });
    });

    const TEST = treesmarker
        .filter(
            tree =>
                tree.location.coordinates[1] > lonMin(curLocation) &&
                tree.location.coordinates[1] < lonMax(curLocation) &&
                tree.location.coordinates[0] > latMin(curLocation) &&
                tree.location.coordinates[0] < latMax(curLocation),
        )
        .map(tree => (
            // console.log(tree.friendlyname),
            <Marker
                key={tree._id}
                icon={treeIcon} // {randtreeIcon()}
                position={tree.location.coordinates}>
                <Popup>
                    {"I'm "}
                    {coolName(tree.friendlyname)}
                    <br />
                    <p>
                        {"Value : "}
                        {Math.ceil(tree.treevalue)}
                        {"🍃 leafs "}
                    </p>
                    <p>
                        {"Owner : "}
                        {tree.owner}
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
                    <p>
                        {"tree ID : "}
                        {tree._id}
                    </p>
                    <div>
                        <Formik
                            initialValues={{
                                username: sessionStorage.getItem("username"),
                                treeid: tree._id,
                                treevalue: Math.ceil(tree.treevalue),
                                color: sessionStorage.getItem("color"),
                            }}
                            onSubmit={async values => {
                                console.log(values);
                                await axios
                                    .post("/api/trees/buy", values)
                                    .then(res => {
                                        console.log(res.data);
                                        Justebuy = tree._id;
                                    })
                                    .catch(error2 => {
                                        console.log(error2.response);
                                    });
                            }}>
                            {({isSubmitting}) => (
                                <Form>
                                    {/* <Field
                                        name={"username"}
                                        type={"hidden"}
                                        value={sessionStorage.getItem("username")}
                                    />
                                    <Field
                                        name={"treeid"}
                                        type={"hidden"}
                                        value={tree._id}
                                    />
                                    <Field
                                        name={"treevalue"}
                                        type={"hidden"}
                                        value={Math.ceil(tree.treevalue)}
                                    />
                                    <Field
                                        name={"color"}
                                        type={"hidden"}
                                        value={sessionStorage.getItem("color")}
                                    /> */}
                                    {!tree.owner || !Justebuy === tree._id ? (
                                        <button
                                            type={"submit"}
                                            disabled={isSubmitting}>
                                            {"Buy"}
                                        </button>
                                    ) : (
                                        <div>{"buying back Soon"}</div>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Popup>
            </Marker>
        ));
    return TEST;
};

export default GameMap;

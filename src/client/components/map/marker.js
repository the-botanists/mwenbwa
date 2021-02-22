import React from "react";
import axios from "axios";
import {Marker, Popup} from "react-leaflet"; // MapContainer, TileLayer
import L from "leaflet";
import TreeImage0 from "../../assets/img/watercolor-tree1.png";
import TreeImage1 from "../../assets/img/watercolor-tree2.png";

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

function fixLatinName(treeLatinName) {
    let latinName = treeLatinName.split(` X `)[0];
    latinName = latinName.split(` x `)[0];
    latinName = latinName.split(` '`)[0];
    return latinName;
}

// let center = () => {return [50.6283, 5.5768];}
const CurrentCenter = [50.6283, 5.5768];
const latMin = center => center[0] - 0.003;
const latMax = center => center[0] + 0.003;
const lonMin = center => center[1] - 0.006;
const lonMax = center => center[1] + 0.006;

class TreesMarkers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTreesMarker: [],
            data: this.props.dataParentToChild,
        };
    }

    componentDidMount() {
        this.getTreesMarker();
    }

    getTreesMarker() {
        axios
            .get("/api/trees/all")
            .then(response => {
                const data = response.data;
                // let filtered = response.filter(
                //     tree =>
                //         tree.location.coordinates[1] > lonMin &&
                //         tree.location.coordinates[1] < lonMax &&
                //         tree.location.coordinates[0] > latMin &&
                //         tree.location.coordinates[0] < latMax
                //         );
                this.setState({allTreesMarker: data});
                console.log("Data received!!");
                console.log("data");
            })
            .catch(() => {
                // console.log("Error data found!!!");
            });
    }

    displayTreeMaker(allTreesMarker) {
        if (!allTreesMarker.length) {
            return null;
        }
        const TEST = allTreesMarker
            .filter(
                tree =>
                    tree.location.coordinates[1] > lonMin(CurrentCenter) &&
                    tree.location.coordinates[1] < lonMax(CurrentCenter) &&
                    tree.location.coordinates[0] > latMin(CurrentCenter) &&
                    tree.location.coordinates[0] < latMax(CurrentCenter),
            )
            .map(tree => (
                <Marker
                    key={tree._id}
                    icon={randtreeIcon()}
                    position={tree.location.coordinates}>
                    <Popup>
                        {"I'm a Tree"}
                        <br />
                        <p>
                            {"Value : "}
                            {Math.ceil(tree.treevalue)}
                            {"🍃 leafs "}
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
                        <div className={"control"}>
                            <label className={"label"}>{"latinName"}</label>
                            <input
                                className={"input"}
                                type={"text"}
                                placeholder={"Text input"}
                                value={tree.latinName}
                            />
                            <label className={"label"}>{"coordinates"}</label>
                            <input
                                className={"input"}
                                type={"text"}
                                placeholder={"Text input"}
                                value={tree.location.coordinates}
                            />
                            <label className={"label"}>{"circonf"}</label>
                            <input
                                className={"input"}
                                type={"text"}
                                placeholder={"Text input"}
                                value={tree.circonf}
                            />
                            <label className={"label"}>{"height"}</label>
                            <input
                                className={"input"}
                                type={"text"}
                                placeholder={"Text input"}
                                value={tree.height}
                            />
                            <label className={"label"}>{"Name"}</label>
                            <input
                                className={"input"}
                                type={"text"}
                                placeholder={"Text input"}
                                value={this.props.dataParentToChild}
                            />
                        </div>
                        <button type={"button"} className={"button is-success"}>
                            {"Buy"}
                        </button>
                    </Popup>
                </Marker>
            ));
        return TEST;
    }

    render() {
        return <>{this.displayTreeMaker(this.state.allTreesMarker)}</>;
    }
}

export default TreesMarkers;

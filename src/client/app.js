import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// import {withRouter} from "react-router";
import "./assets/css/reset.css";
import "./assets/style.css";
import GameBoard from "./components/gameboard";
import GameBoardLoad from "./components/gameboardlog";
import Modallog from "../client/components/modalelog";
// import {divIcon} from "leaflet";
if (sessionStorage.getItem("token")) {
    ReactDOM.render(<GameBoard />, document.querySelector("#app"));
} else {
    ReactDOM.render(
        <BrowserRouter>
            <GameBoardLoad />
            <Modallog />
        </BrowserRouter>,
        document.querySelector("#app"),
    );
}

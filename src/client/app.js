import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
// import {withRouter} from "react-router";
import "./assets/css/reset.css";
import "./assets/style.css";
import GameBoard from "./components/gameboard";
import {Hello} from "../client/components/hello";
// import {divIcon} from "leaflet";
const burl = "http://localhost";
const isConnected = 0;
if (isConnected === 1) {
    ReactDOM.render(<GameBoard />, document.querySelector("#app"));
} else {
    ReactDOM.render(
        <BrowserRouter>
            <Route exact path={`${burl}/user/signup`} />
            <Hello />
        </BrowserRouter>,
        document.querySelector("#app"),
    );
}

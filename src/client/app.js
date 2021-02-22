import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
// import {withRouter} from "react-router";
import "./assets/css/reset.css";
import "./assets/style.css";
import GameBoard from "./components/gameboard";
import {SignUp} from "../client/components/signup";
import {Login} from "../client/components/login";
// import {divIcon} from "leaflet";
const burl = "http://localhost";
if (sessionStorage.getItem("token")) {
    ReactDOM.render(<GameBoard />, document.querySelector("#app"));
} else {
    ReactDOM.render(
        <BrowserRouter>
            <Route exact path={`${burl}/user/signup`} />
            <SignUp />
            <Login />
        </BrowserRouter>,
        document.querySelector("#app"),
    );
}

import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import {withRouter} from "react-router";
import "./assets/css/reset.css";
import "./assets/style.css";
import GameBoard from "./components/gameboard";
import {RegistrationForm} from "../client/components/hello";
// import {divIcon} from "leaflet";
const burl = "http://localhost:12345";
const isConnected = 0;
if (isConnected === 1) {
    ReactDOM.render(<GameBoard />, document.querySelector("#app"));
} else {
    ReactDOM.render(
        <Router>
            <Route path={`${burl}/signup`} />
            <div>
                <RegistrationForm />
            </div>
        </Router>,
        document.querySelector("#app"),
    );
}

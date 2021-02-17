import * as React from "react";
import ReactDOM from "react-dom";
// import "./assets/css/reset.css";
// import "./assets/style.css";
// import {registerServiceWorker} from "register-service-worker";

import {Hello} from "../client/components/hello";
import GameBoard from "./components/gameboard";
const isConnected = 0;
if (isConnected === 0) {
    ReactDOM.render(<GameBoard />, document.querySelector("#app"));
} else {
    ReactDOM.render(
        <div>
            <Hello />
        </div>,
        document.querySelector("#app"),
    );
}

import * as React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./assets/style.css";

// import Hello from "./components/hello";
import GameBoard from "./components/gameboard";
import SubmitForm from "./components/profile/list";

const isConnected = "true";
console.log(isConnected);

if (isConnected === "true") {
    ReactDOM.render(<GameBoard />, document.querySelector("#app"));
} else {
    // ReactDOM.render(<Hello />, document.querySelector("#app"));
    ReactDOM.render(<SubmitForm />, document.querySelector("#app"));
}

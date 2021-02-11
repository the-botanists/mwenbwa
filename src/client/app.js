/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

import HelloWorld from "./components/hello";

ReactDOM.render(<HelloWorld />, document.querySelector("#app"));

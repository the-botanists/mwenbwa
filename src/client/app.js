/* botanists/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * started at 08/02/2021
 */

import * as React from "react";
import ReactDOM from "react-dom";

// import HelloWorld from "./components/hello";
import GameBoard from "./components/gameboard";

ReactDOM.render(<GameBoard />, document.querySelector("#app"));

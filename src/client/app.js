import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import "./assets/reset.css";

// import HelloWorld from "./components/hello";

import Scoreboard from "./components/scoreboard/container/score-board";

ReactDOM.render(<Scoreboard />, document.querySelector("#app"));

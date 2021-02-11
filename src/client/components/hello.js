/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ButtonScore from "../components/scoreboard/button-score";

const HelloWorld = () => (
    <div>
        <h1>{"Hello, Quentin!"}</h1>
        <hr />
        <small>{"becode/mwenbwa"}</small>
        <ButtonScore />
    </div>
);

export default HelloWorld;

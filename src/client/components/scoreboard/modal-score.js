import {createPortal} from "react-dom";
import * as React from "react";

// import PropTypes from "prop-types";
// import {useCallback} from "react";
// import button from "./button"

const ModalScore = () =>
    createPortal(
        <div>
            <div className={"box"}>
                <h4>{"Scoreboard"}</h4>
            </div>
        </div>,
        document.querySelector("#modalScore"),
    );

// ModalScore.propTypes = {

// };

export default ModalScore;

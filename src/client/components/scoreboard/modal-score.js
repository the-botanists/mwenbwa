import * as React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

import TableScore from "./table-score";

const modalStyle = {
    position: "absolute",
    zIndex: 1000,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.20)",
};

const ModalScore = ({show = false}) => {
    if (!show) {
        return null;
    }

    return createPortal(
        <div style={modalStyle}>
            <div className={classnames("box")}>
                <TableScore />
            </div>
        </div>,
        document.querySelector("#scoreModal"),
    );
};

ModalScore.propTypes = {
    show: PropTypes.bool,
};

export default ModalScore;

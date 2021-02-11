import * as React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

import TableScore from "./table-score";
// import ButtonCloseModal from "./button-close-modal";
import Button from "./button";

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

const ModalScore = ({show = false, onCloseModal, onShareScore}) => {
    if (!show) {
        return null;
    }

    return createPortal(
        <div style={modalStyle}>
            <div className={classnames("box")}>
                <TableScore />
                <div className={classnames("contButtons")}>
                    <Button label={"Close"} onClick={onCloseModal} />
                    <Button label={"Share"} onClick={onShareScore} />
                </div>
            </div>
        </div>,
        document.querySelector("#scoreModal"),
    );
};

ModalScore.propTypes = {
    show: PropTypes.bool,
    onCloseModal: PropTypes.func.isRequired,
    onShareScore: PropTypes.func,
};

export default ModalScore;

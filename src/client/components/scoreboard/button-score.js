import React from "react";
import PropTypes from "prop-types";

const ButtonScore = ({onOpenModal}) => (
    <div className={"topbar__button"} onClick={onOpenModal}>
        <div className={"topbar__buttonLabel"}>{"Score"}</div>
    </div>
);

ButtonScore.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
};

export default ButtonScore;

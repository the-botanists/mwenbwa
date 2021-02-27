import React from "react";
import PropTypes from "prop-types";

const ButtonGamelog = ({onOpenModal}) => (
    <div className={"topbar__button"} onClick={onOpenModal}>
        <div className={"topbar__buttonLabel"}>{"Gamelog"}</div>
    </div>
);

ButtonGamelog.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
};

export default ButtonGamelog;

import React from "react";
import PropTypes from "prop-types";

const ButtonProfil = ({onOpenModal}) => (
    <div className={"topbar__button"} onClick={onOpenModal}>
        <div className={"topbar__buttonLabel"}>{"Profile"}</div>
    </div>
);

ButtonProfil.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
};

export default ButtonProfil;

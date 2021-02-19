import React from "react";
import PropTypes from "prop-types";

import Button from "../reusable-components/button";

const ButtonProfil = ({onOpenModal}) => (
    <div>
        <Button label={"Profil"} onClick={onOpenModal} />
    </div>
);

ButtonProfil.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
};

export default ButtonProfil;

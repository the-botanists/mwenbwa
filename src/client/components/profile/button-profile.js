import React from "react";
import PropTypes from "prop-types";

import Button from "../tools/button";

const ButtonProfil = ({onOpenModal}) => (
    <div>
        <Button
            // btnModif={"nav"}
            label={"Profil"}
            onClick={onOpenModal}
        />
    </div>
);

ButtonProfil.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
};

export default ButtonProfil;

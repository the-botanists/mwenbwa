import React from "react";
import PropTypes from "prop-types";

import Button from "../tools/button";

const ButtonScore = ({onOpenModal}) => (
    <div>
        <Button
            //  btnModif={"nav"}
            label={"Score"}
            onClick={onOpenModal}
        />
    </div>
);

ButtonScore.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
};

export default ButtonScore;

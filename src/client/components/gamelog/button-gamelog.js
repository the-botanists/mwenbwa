import React from "react";
import PropTypes from "prop-types";

import Button from "../tools/button";

const ButtonGamelog = ({onOpenModal}) => (
    <div>
        <Button
            // btnModif={"nav"}
            label={"Log"}
            onClick={onOpenModal}
        />
    </div>
);

ButtonGamelog.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
};

export default ButtonGamelog;

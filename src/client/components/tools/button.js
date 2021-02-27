import React from "react";
import PropTypes from "prop-types";

const Button = ({label, title, disabled = false, className, onClick}) => (
    <button
        className={className}
        type={"button"}
        disabled={disabled}
        title={title || label}
        onClick={onClick}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Button;

import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Button = ({label, title, disabled = false, className, onClick}) => (
    <button
        className={classnames("button", "is-success", "is-rounded", className)}
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

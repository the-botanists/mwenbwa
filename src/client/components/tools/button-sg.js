import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "../../assets/css/map.css";
const ButtonSignUp = ({label, title, disabled = false, onClick}) => (
    <div className={"is-justify-content-space-around"}>
        <p className={"btn_sg"}>{"Not already registered ?"}</p>
        <button
            className={classnames(
                "button",
                "is-success",
                "is-small",
                "is-rounded",
                "ml-6",
            )}
            type={"button"}
            disabled={disabled}
            title={title || label}
            onClick={onClick}>
            {label}
        </button>
    </div>
);

ButtonSignUp.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};
export default ButtonSignUp;

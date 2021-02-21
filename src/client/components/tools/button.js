import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        className={classnames("button", "is-success", "is-rounded")}
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

// const Button = ({label, title, disabled = false, btnModif, onClick}) => (
//     <div
//         className={classnames("k-button",`k-button--${btnModif}` )}
//         type={"button"}
//         disabled={disabled}
//         title={title || label}
//         onClick={onClick}>
//         {label}
//     </div>
// );

// Button.propTypes = {
//     label: PropTypes.string.isRequired,
//     title: PropTypes.string,
//     disabled: PropTypes.bool,
//     optionClass: PropTypes.string,
//     onClick: PropTypes.func.isRequired,
// };

export default Button;

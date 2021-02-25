import React from "react";
import PropTypes from "prop-types";

const Field = ({
    icon,
    label,
    placeholder,
    help,
    value,
    name,
    htmlFor,
    onChange,
}) => (
    <>
        <div className={"field"}>
            <label htmlFor={htmlFor} className={"label"}>
                {label}
            </label>
            <div className={"control has-icons-left"}>
                <input
                    value={value}
                    className={"input"}
                    type={"text"}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <span className={"icon is-small is-left"}>{icon}</span>
                <p className={"help"}>{help}</p>
            </div>
        </div>
    </>
);

Field.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    help: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    htmlFor: PropTypes.string,
};

export default Field;

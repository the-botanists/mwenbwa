import React from "react";
import PropTypes from "prop-types";

const Field = ({icon, label, placeholder, help, onChange}) => (
    <>
        <div className={"field"}>
            <label className={"label"}>{label}</label>
            <div className={"control has-icons-left"}>
                <input
                    className={"input"}
                    type={"text"}
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
    label: PropTypes.string.isRequired,
    help: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default Field;

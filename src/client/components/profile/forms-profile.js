import React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";

import ColorPicker from "../tools/color-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Field from "../tools/field";
import Avatar from "../tools/avatar";

const FormProfile = () => {
    const iconUser = <FontAwesomeIcon icon={faUser} />;
    const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} />;

    return (
        <div>
            <Avatar emailToHash={"cassartkv@gmail.com"} />
            <Field icon={iconUser} label={"Name"} placeholder={"Your name"} />
            <Field
                icon={iconUser}
                label={"User Name"}
                placeholder={"Your username"}
                // username ? "username already in use" : "This username is available" >>
                help={"This username is available"}
            />
            <Field
                icon={iconEnvelope}
                label={"Email"}
                placeholder={"Your email "}
                // email !valide ? "This email is invalid" : "email valid" >>
                help={"This email is invalid"}
            />

            <div className={"field"}>
                <label className={"label"}>{"Color"}</label>
                <ColorPicker />
            </div>
        </div>
    );
};

export default FormProfile;

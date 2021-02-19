import React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";
const md5 = require("md5");

import ColorPicker from "../reusable-components/color-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const FormProfile = () => {
    const iconUser = <FontAwesomeIcon icon={faUser} />;
    const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} />;

    const emailHash = email => md5(email.trim().toLowerCase());
    const hashGravatar = emailHash("sfsartV@gmail.com");
    console.log(hashGravatar);

    return (
        <div>
            <div className={"avatar"}>
                <img className={"avatar__content "} src={""} alt={""} />
            </div>
            <div className={"field"}>
                <label className={"label"}>{"Name"}</label>
                <div className={"control has-icons-left"}>
                    <input
                        className={"input"}
                        type={"text"}
                        placeholder={"Your name"}
                    />
                    <span className={"icon is-small is-left"}>{iconUser}</span>
                </div>
            </div>

            <div className={"field"}>
                <label className={"label"}>{"Username"}</label>
                <div className={"control has-icons-left"}>
                    <input
                        className={"input"}
                        type={"text"}
                        placeholder={"Your username"}
                    />
                    <span className={"icon is-small is-left"}>{iconUser}</span>
                </div>
                <p className={"help"}>{"This username is available"}</p>
            </div>

            <div className={"field"}>
                <label className={"label"}>{"Email"}</label>
                <div className={"control has-icons-left"}>
                    <input
                        className={"input"}
                        type={"email"}
                        placeholder={"Your Email"}
                    />
                    <span className={"icon is-small is-left"}>
                        {iconEnvelope}
                    </span>
                </div>
                <p className={"help"}>{"This email is invalid"}</p>
            </div>
            <div className={"field"}>
                <label className={"label"}>{"Color"}</label>
                <ColorPicker />
            </div>
        </div>
    );
};

export default FormProfile;

import * as React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";

import ColorPicker from "../reusable-components/color-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const FormProfile = () => {
    const iconUser = <FontAwesomeIcon icon={faUser} />;
    const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} />;

    return (
        <div>
            <div className={"field"}>
                <label className={"label"}>{"Name"}</label>
                <div className={"control"}>
                    <input
                        className={"input"}
                        type={"text"}
                        placeholder={"Text input"}
                    />
                </div>
            </div>

            <div className={"field"}>
                <label className={"label"}>{"Username"}</label>
                <div className={"control has-icons-left"}>
                    <input
                        className={"input"}
                        type={"text"}
                        placeholder={"Text input"}
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
                        placeholder={"Email input"}
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

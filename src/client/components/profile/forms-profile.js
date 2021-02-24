import React, {useState, useCallback} from "react";
import {useSpring, animated, config} from "react-spring";
// import axios from "axios";

// import PropTypes from "prop-types";
// import classnames from "classnames";

// import ColorPicker from "../tools/color-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";

import Field from "../tools/field";
import Avatar from "../tools/avatar";

const FormProfile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    // const [colorSelected, setColorSelected] = useState("#00D2FC")
    // const handleChangeColor = () => setColorSelected(color);

    const userNameSession = sessionStorage.getItem("username");
    const emailSession = sessionStorage.getItem("email");
    const colorSession = sessionStorage.getItem("color");

    const iconUser = <FontAwesomeIcon icon={faUser} />;
    const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} />;

    const [colorSelected, setColorSelected] = useState(colorSession);
    const [showPicker, setShowPicker] = useState(false);

    const colors = [
        "#FF6900",
        "#FCB900",
        "#7BDCB5",
        "#00D084",
        "#8ED1FC",
        "#0693E3",
        "#ABB8C3",
        "#EB144C",
        "#F78DA7",
        "#9900EF",
    ];

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    const handleChangeColor = useCallback(() => {
        setShowPicker(val => !val);
    }, []);

    const handleChangeUser = useCallback(event => {
        setUsername(event.target.value);
    }, []);
    const handleChangeEmail = useCallback(event => {
        setEmail(event.target.value);
    }, []);

    // useEffect(() => {
    //     async function upUserInfos() {
    //         let res = await axios.patch("/api/users", userInfos);

    //         let data = res.data;
    //         console.log(data);
    //     }
    // }, []);

    const fadeStyles = useSpring({
        config: {...config.default},
        from: {transformOrigin: "left", transform: "scaleX(0)"},
        to: {
            transform: showPicker ? "scaleX(1)" : "scaleX(0)",
        },
    });

    return (
        <div>
            <p>{username}</p>
            <p>{email}</p>
            <p>{colorSession}</p>
            <Avatar emailToHash={"cassartkv@gmail.com"} />
            <Field
                onChange={handleChangeUser}
                value={userNameSession}
                icon={iconUser}
                label={"User Name"}
                placeholder={"Your username"}
                // username ? "username already in use" : "This username is available" >>
                help={"This username is available"}
            />
            <Field
                onChange={handleChangeEmail}
                value={emailSession}
                icon={iconEnvelope}
                label={"Email"}
                placeholder={"Your email "}
                // email !valide ? "This email is invalid" : "email valid" >>
                help={"This email is invalid"}
            />
            <div className={"field"}>
                <label className={"label"}>{"Color"}</label>
                <div className={"k-colorPicker "}>
                    <div className={"k-colorPicker__selectedContainer"}>
                        <div
                            value={colorSession}
                            onClick={handleChangeColor}
                            className={"k-colorPicker__select"}
                            id={"colorSelected"}
                            style={{backgroundColor: colorSelected}}
                        />
                    </div>
                    <animated.div
                        className={"k-colorPicker__selectedContainer"}
                        style={fadeStyles}>
                        {colors.map((color, i) => {
                            const key = i;
                            return (
                                <div
                                    key={key}
                                    onClick={() => {
                                        setColorSelected(color);
                                    }}
                                    className={"k-colorPicker__select"}
                                    style={{backgroundColor: color}}
                                />
                            );
                        })}
                    </animated.div>
                </div>
            </div>
        </div>
    );
};

export default FormProfile;

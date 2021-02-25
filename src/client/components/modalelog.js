import React, {useState} from "react";
import Login from "./login";
import ModalLog from "../components/tools/modal-log";
import SignUp from "./signup";
import Button from "../components/tools/button";
import ButtonSignUp from "../components/tools/button-sg";
import "../../client/assets/css/map.css";

const Modallog = () => {
    const [showModal] = useState(true);
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const handleSignUp = () => {
        setSignUp(true);
    };
    const handleLogin = () => {
        setLogin(true);
    };

    if (login) {
        return <ModalLog show={showModal} content={<Login />} />;
    } else if (signUp) {
        return (
            <ModalLog
                show={showModal}
                content={<SignUp />}
                button2={<Button label={"Login"} onClick={handleLogin} />}
            />
        );
    }
    return (
        <div>
            <ModalLog
                show={showModal}
                content={<Login />}
                button2={
                    <ButtonSignUp label={"SignUp"} onClick={handleSignUp} />
                }
            />
        </div>
    );
};

export default Modallog;

import React, {useState} from "react";
import axios from "axios";
// localStorage.removeItem("logged");
const burl = "http://localhost";
const auth = localStorage.getItem("token");
export function RegistrationForm(props) {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: null,
    });
    const handleChange = e => {
        const {id, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };
    const redirectToHome = () => {
        props.updateTitle("gameboard");
        props.history.push("/gameboard");
    };
    // const redirectToLogin = () => {
    //     props.updateTitle("Login");
    //     props.history.push("/login");
    // };
    const sendDetailsToServer = () => {
        if (
            state.username.length &&
            state.email.length &&
            state.password.length
        ) {
            props.showError(null);
            const payload = {
                username: state.username,
                email: state.email,
                password: state.password,
            };
            axios
                .post(`${burl}/user/signup`, payload)
                .then(response => {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            successMessage:
                                "Registration successful. Redirecting to home page..",
                        }));
                        localStorage.setItem({auth}, response.data.token);
                        redirectToHome();
                        props.showError(null);
                    } else {
                        props.showError("Some error ocurred");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            props.showError("Please enter valid username and password");
        }
    };

    function handleClick(e) {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer();
        } else {
            props.showError("Passwords do not match");
        }
    }
    return (
        <div
            className={
                "container-fullscreen container.is-fullhd has-background-dark"
            }>
            <div className={"container"}>
                <h1 className={"has-text-light"}>{"Battle Tree Conqueror"}</h1>
                <hr />
                <div className={"columns"}>
                    <div
                        className={
                            "column is-three-quarters has-background-primary"
                        }>
                        {"Info"}
                        <div className={"box"}>
                            {"I'm in a box."}
                            <br />
                            {"Not Connected"}
                        </div>
                    </div>

                    <div
                        className={
                            "column is-one-quarter has-background-primary"
                        }>
                        <form className={"box"}>
                            <div className={"field"}>
                                <label className={"label"}>{"Email"}</label>
                                <div className={"control"}>
                                    <input
                                        type={"email"}
                                        className={"input"}
                                        placeholder={
                                            "e.g. john.doe@example.com"
                                        }
                                    />
                                </div>
                            </div>

                            <div className={"field"}>
                                <label className={"label"}>{"Password"}</label>
                                <div className={"control"}>
                                    <input
                                        type={"password"}
                                        className={"input"}
                                        placeholder={"********"}
                                    />
                                </div>
                            </div>

                            <button
                                type={"submit"}
                                className={"button is-primary"}>
                                {"Sign in"}
                            </button>
                        </form>
                        <form className={"box"}>
                            <div className={"field"}>
                                <label className={"label"}>
                                    {"Email subscription"}
                                </label>
                                <div className={"control"}>
                                    <input
                                        type={"email"}
                                        className={"input"}
                                        id={"email"}
                                        placeholder={
                                            "e.g. john.doe@example.com"
                                        }
                                        value={state.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={"field"}>
                                <label className={"label"}>{"Password"}</label>
                                <div className={"control"}>
                                    <input
                                        type={"password"}
                                        className={"input"}
                                        id={"password"}
                                        placeholder={"********"}
                                        value={state.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={"field"}>
                                <label className={"label"}>
                                    {"Confirm Password"}
                                </label>
                                <div className={"control"}>
                                    <input
                                        type={"password"}
                                        className={"input"}
                                        id={"confirmPassword"}
                                        placeholder={"********"}
                                        value={state.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button
                                type={"submit"}
                                className={"button is-primary"}
                                onClick={handleClick}>
                                {"Sign up"}
                            </button>
                        </form>
                    </div>
                </div>
                <small>{"botanists/mwenbwa"}</small>
            </div>
        </div>
    );
}
// export default withRouter(RegistrationForm);

import * as React from "react";

// localStorage.removeItem("logged");

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.goLogin = this.goLogin.bind(this);
    }
    goLogin() {
        localStorage.setItem("logged", true);
    }

    render() {
        const btnLogin = this.goLogin;
        return (
            <div
                className={
                    "container-fullscreen container.is-fullhd has-background-dark"
                }>
                <div className={"container"}>
                    <h1 className={"has-text-light"}>
                        {"Battle of Liege trees"}
                    </h1>
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
                                            className={"input"}
                                            type={"email"}
                                            placeholder={
                                                "e.g. john.doe@example.com"
                                            }
                                        />
                                    </div>
                                </div>

                                <div className={"field"}>
                                    <label className={"label"}>
                                        {"Password"}
                                    </label>
                                    <div className={"control"}>
                                        <input
                                            className={"input"}
                                            type={"password"}
                                            placeholder={"********"}
                                        />
                                    </div>
                                </div>

                                <button
                                    type={"submit"}
                                    className={"button is-primary"}
                                    onClick={btnLogin}>
                                    {"Sign in"}
                                </button>
                            </form>
                        </div>
                    </div>
                    <small>{"botanists/mwenbwa"}</small>
                </div>
            </div>
        );
    }
}

export default Hello;

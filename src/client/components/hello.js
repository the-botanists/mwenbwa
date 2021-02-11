/* botanists/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * started at 11/02/2021
 */

import * as React from "react";

// localStorage.removeItem("logged");

const isLogin = status => {
    localStorage.setItem("logged", status);
};

const isConnected = localStorage.getItem("logged");

const Hello = () => (
    <div
        className={
            "container-fullscreen container.is-fullhd has-background-dark"
        }>
        <div className={"container"}>
            <h1 className={"has-text-light"}>{"Hello, Everyone!"}</h1>
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
                        {"Connected : "}
                        {isConnected}
                    </div>
                </div>

                <div className={"column is-one-quarter has-background-primary"}>
                    <form className={"box"}>
                        <div className={"field"}>
                            <label className={"label"}>{"Email"}</label>
                            <div className={"control"}>
                                <input
                                    className={"input"}
                                    type={"email"}
                                    placeholder={"e.g. john.doe@example.com"}
                                />
                            </div>
                        </div>

                        <div className={"field"}>
                            <label className={"label"}>{"Password"}</label>
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
                            onClick={isLogin(true)}>
                            {"Sign in"}
                        </button>
                    </form>
                </div>
            </div>
            <small>{"botanists/mwenbwa"}</small>
        </div>
    </div>
);

export default Hello;

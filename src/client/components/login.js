import React from "react";
import axios from "axios";
import {Formik, Field, Form} from "formik";

const sleep = ms => new Promise(r => setTimeout(r, ms));
const Login = () => (
    <div>
        <h1>{"Login"}</h1>
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={async values => {
                await sleep(500);
                axios
                    .post("/user/login", values)
                    .then(res => {
                        // Store Data in sessionStorage
                        sessionStorage.setItem("token", res.data.token);
                        sessionStorage.setItem("email", values.email);
                        sessionStorage.setItem("color", values.color);
                        console.log(res.data);
                        axios
                            .get("/user/me", {headers: {token: res.data.token}})
                            .then(response => {
                                sessionStorage.setItem(
                                    "_id",
                                    response.data._id,
                                );
                                sessionStorage.setItem(
                                    "username",
                                    response.data.username,
                                );
                                sessionStorage.setItem(
                                    "email",
                                    response.data.email,
                                );
                                sessionStorage.setItem(
                                    "color",
                                    response.data.color,
                                );
                                console.log(response.data);
                                window.location.reload(false);
                            })
                            .catch(error => {
                                console.log(`error ${error}`);
                            });
                    })
                    .catch(error => {
                        console.log(error.response.data.msg);
                        document.querySelector("#error_log").innerHTML =
                            error.response.data.message;
                    });
            }}>
            {({isSubmitting}) => (
                <div className={"mx-6 px-4"}>
                    <Form>
                        <div className={"field"}>
                            <label className={"label"} htmlFor={"email"}>
                                {"Enter your mail"}
                            </label>
                            <div className={"control"}>
                                <Field
                                    className={"input is-rounded"}
                                    name={"email"}
                                    placeholder={"Leny@mango3d.com"}
                                />
                            </div>
                        </div>
                        <div className={"field"}>
                            <label className={"label"} htmlFor={"password"}>
                                {"Password"}
                            </label>
                        </div>
                        <div className={"control"}>
                            <Field
                                className={"input is-rounded"}
                                name={"password"}
                                placeholder={"*****"}
                                type={"password"}
                            />
                        </div>
                        <div className={"field"}>
                            <button
                                className={"button is-success is-rounded mt-3"}
                                type={"submit"}
                                disabled={isSubmitting}>
                                {"Submit"}
                            </button>
                        </div>
                        <div id={"error_log"}> </div>
                    </Form>
                </div>
            )}
        </Formik>
    </div>
);
export default Login;

import React from "react";
import axios from "axios";
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

const sleep = ms => new Promise(r => setTimeout(r, ms));
const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(6, "Too Short!")
        .max(24, "Too Long!")
        .required("Required"),
});
const Login = () => (
    <div>
        <h1>{"Login"}</h1>
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async values => {
                await sleep(500);
                axios
                    .post("/user/login", values)
                    .then(res => {
                        // Store Data in sessionStorage
                        sessionStorage.setItem("token", res.data.token);
                        sessionStorage.setItem("email", values.email);
                        sessionStorage.setItem("color", values.color);
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
                                window.location.reload(false);
                            })
                            .catch(error => {
                                console.log(`error ${error}`);
                            });
                    })
                    .catch(error => {
                        document.querySelector("#error_log").innerHTML =
                            error.response.data.message;
                    });
            }}>
            {({isSubmitting, errors, touched}) => (
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
                                    type={"email"}
                                    placeholder={"Leny@mango3d.com"}
                                />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
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
                                placeholder={"➏➏➏➏➏➏"}
                                type={"password"}
                            />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
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

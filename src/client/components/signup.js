import React from "react";
import axios from "axios";
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Too Short!")
        .max(10, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .min(6, "Too Short!")
        .max(32, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});
const SignUp = () => (
    <div>
        <h1>{"Sign Up"}</h1>
        <Formik
            initialValues={{
                username: "",
                password: "",
                email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async values => {
                await sleep(500);
                axios
                    .post("/user/signup", values)
                    .then(res => {
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
                                console.log(response.data);
                                window.location.reload(false);
                            })
                            .catch(error => {
                                console.log(`error ${error}`);
                            });
                    })
                    .catch(error => {
                        document.querySelector("#error_msg").innerHTML =
                            error.response.data.msg;
                    });
            }}>
            {({isSubmitting, errors, touched}) => (
                <div className={"mx-6 px-4"}>
                    <Form>
                        <div className={"field"}>
                            <label htmlFor={"username"}>
                                {"Enter your username"}
                            </label>
                            <Field
                                className={"input is-rounded"}
                                name={"username"}
                                placeholder={"Leny"}
                            />
                            {errors.username && touched.username ? (
                                <div>{errors.username}</div>
                            ) : null}
                        </div>
                        <div className={"field"}>
                            <label htmlFor={"password"}>{"Password"}</label>
                            <Field
                                className={"input is-rounded"}
                                name={"password"}
                                type={"password"}
                                placeholder={"➏➏➏➏➏➏"}
                            />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                        </div>
                        <div className={"field"}>
                            <label htmlFor={"email"}>{"Email"}</label>
                            <Field
                                className={"input is-rounded"}
                                name={"email"}
                                placeholder={"leny@mango3d.com"}
                                type={"email"}
                            />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>
                        <div className={"field"}>
                            <button
                                className={"button is-success is-rounded mt-3"}
                                type={"submit"}
                                disabled={isSubmitting}>
                                {"Submit"}
                            </button>
                            <div id={"error_msg"}> </div>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    </div>
);

export default SignUp;

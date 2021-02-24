import React from "react";
import axios from "axios";
import {Formik, Field, Form} from "formik";
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SignUp = () => (
    <div>
        <h1>{"Sign Up"}</h1>
        <Formik
            initialValues={{
                username: "",
                password: "",
                email: "",
            }}
            onSubmit={async values => {
                await sleep(500);
                axios
                    .post("/user/signup", values)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error.response.data.msg);
                        document.querySelector("#error_msg").innerHTML =
                            error.response.data.msg;
                    });
            }}>
            {({isSubmitting}) => (
                <div className={"mx-6 px-4"}>
                    <Form>
                        <div className={"field"}>
                            <label htmlFor={"username"}>
                                {"Enter your username"}
                            </label>
                            <Field
                                className={"input is-rounded"}
                                name={"username"}
                                placeholder={"Jane"}
                            />
                        </div>
                        <div className={"field"}>
                            <label htmlFor={"password"}>{"Password"}</label>
                            <Field
                                className={"input is-rounded"}
                                name={"password"}
                                type={"password"}
                                placeholder={"*****"}
                            />
                        </div>
                        <div className={"field"}>
                            <label htmlFor={"email"}>{"Email"}</label>
                            <Field
                                className={"input is-rounded"}
                                name={"email"}
                                placeholder={"jane@acme.com"}
                                type={"email"}
                            />
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

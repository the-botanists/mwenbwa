import React from "react";
import axios from "axios";
import {Formik, Field, Form} from "formik";
const sleep = ms => new Promise(r => setTimeout(r, ms));
const Login = () => (
    <div>
        <h1>{"Loggin"}</h1>
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
                        console.log(res.data);
                        window.location.reload(false);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }}>
            {({isSubmitting}) => (
                <Form>
                    <label htmlFor={"email"}>{"Enter your mail"}</label>
                    <Field name={"email"} placeholder={"Jane@gmail.com"} />

                    <label htmlFor={"password"}>{"Password"}</label>
                    <Field name={"password"} placeholder={"*****"} />
                    <button type={"submit"} disabled={isSubmitting}>
                        {"Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);
export {Login};

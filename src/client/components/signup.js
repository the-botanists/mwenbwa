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
                        console.log(error);
                    });
            }}>
            {({isSubmitting}) => (
                <Form>
                    <label htmlFor={"username"}>{"Enter your username"}</label>
                    <Field name={"username"} placeholder={"Jane"} />

                    <label htmlFor={"password"}>{"Password"}</label>
                    <Field name={"password"} placeholder={"*****"} />

                    <label htmlFor={"email"}>{"Email"}</label>
                    <Field
                        name={"email"}
                        placeholder={"jane@acme.com"}
                        type={"email"}
                    />
                    <button type={"submit"} disabled={isSubmitting}>
                        {"Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export {SignUp};

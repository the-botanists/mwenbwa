import React from "react";
import axios from "axios";
import {Formik, Field, Form} from "formik";
import {Redirect} from "react-router";

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
                        // Enregistrer des données dans sessionStorage
                        sessionStorage.setItem("token", res.data.token);
                        console.log(res.data);
                        return <Redirect to={"/"} />;
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

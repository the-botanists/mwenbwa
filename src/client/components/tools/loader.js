import React from "react";
import "../../assets/css/loader.css";

const Loader = () => (
    <>
        <div className={"k-loaderContainer"}>
            <div className={"k-loader"}>
                <div className={"k-loader__bar k-loader__bar--1"} />
                <div className={"k-loader__bar k-loader__bar--2"} />
                <div className={"k-loader__bar k-loader__bar--3"} />
                <div className={"k-loader__bar k-loader__bar--4"} />
                <div className={"k-loader__bar k-loader__bar--5"} />
            </div>
        </div>
    </>
);
export default Loader;

import React from "react";
import "../../assets/css/loader.css";

const Loader = () => (
    <div className={"loader-container"}>
        <div className={"loader"}>
            <div className={"loader__bar load__bar--1"} />
            <div className={"loader__bar load__bar--2"} />
            <div className={"loader__bar load__bar--3"} />
            <div className={"loader__bar load__bar--4"} />
            <div className={"loader__bar load__bar--5"} />
        </div>
        {/* <div className="loader">
                <div className="loader__bar load__bar--1-rev"></div>
                <div className="loader__bar load__bar--2-rev"></div>
                <div className="loader__bar load__bar--3-rev"></div>
                <div className="loader__bar load__bar--4-rev"></div>
                <div className="loader__bar load__bar--5-rev"></div>
            </div> */}
    </div>
);
export default Loader;

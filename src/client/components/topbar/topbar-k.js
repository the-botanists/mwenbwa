import React from "react";
import Menu from "./menu";
import UserScore from "./user-score";

const TopbarK = () => (
    <div className={"k-topbar"}>
        <UserScore />
        <Menu />
    </div>
);

export default TopbarK;

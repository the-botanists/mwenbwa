import React from "react";

import Scoreboard from "../scoreboard/container/score-board";
import Gamelog from "../gamelog/container/gamelog";
import Profile from "../profile/container/profile";
const goLogOut = () => {
    sessionStorage.clear();
};

const Menu = () => (
    <div className={"topbarMenu"}>
        <Gamelog />
        <Scoreboard />
        <Profile />
        <form>
            <button
                type={"submit"}
                className={"topbarMenu__"}
                onClick={goLogOut}>
                <strong>{"Log Out"}</strong>
            </button>
        </form>
    </div>
);

export default Menu;

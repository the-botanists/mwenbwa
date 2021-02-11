/* botanists/mwenbwa
 *
 * /src/client/components/topbar.js - Hello Component
 *
 * started at 11/02/2021
 */

import * as React from "react";

import Scoreboard from "./scoreboard/container/score-board";

const goLogOut = () => {
    localStorage.removeItem("logged");
};

const TopBar = () => (
    <nav
        className={"has-navbar-fixed-top has-background-primary p-4"}
        role={"navigation"}
        aria-label={"main navigation"}>
        <div id={"navbarBasicExample"} className={"navbar-menu"}>
            <div className={"navbar-start"}>
                <a className={"navbar-item button is-rounded mx-6 px-6"}>
                    {"Info 1"}
                </a>

                <a className={"navbar-item button is-rounded mx-6 px-6"}>
                    {"Info 2"}
                </a>
                <Scoreboard />
            </div>

            <div className={"navbar-end"}>
                <a
                    className={
                        "navbar-item button is-success is-rounded mx-4 px-4"
                    }>
                    {"Profile"}
                </a>
                <form>
                    <button
                        type={"submit"}
                        className={
                            "navbar-item button is-danger is-rounded mx-4 px-4"
                        }
                        onClick={goLogOut}>
                        <strong>{"Log Out"}</strong>
                    </button>
                </form>
            </div>
        </div>
    </nav>
);

export default TopBar;

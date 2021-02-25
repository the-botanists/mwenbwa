/* botanists/mwenbwa
 *
 * /src/client/components/topbar.js - Hello Component
 *
 * started at 11/02/2021
 */

import React, {useState, useEffect} from "react";
import axios from "axios";
import Scoreboard from "./scoreboard/container/score-board";
import Gamelog from "./gamelog/container/gamelog";
import Profile from "./profile/container/profile";
const goLogOut = () => {
    sessionStorage.clear();
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TopBar = () => {
    const [error, setError] = useState(null);
    const [userScore, setUserScore] = useState([]);
    // const [curLocation, setCurLocation] = useState([]);

    useEffect(async () => {
        await sleep(3000);
        axios
            .get(`/api/scores/user/${sessionStorage.getItem("username")}`)
            .then(response => {
                setUserScore(response.data);
            })
            // })
            .catch(() => {
                // console.log("Error retrieving data!!!");
                setError(error);
                console.log(error);
            });
    });
    const TEST2 = (
        <nav
            className={"navbar has-background-primary p-4"}
            role={"navigation"}
            aria-label={"main navigation"}>
            <div id={"navbarBasicExample"} className={"navbar-menu"}>
                <div className={"navbar-start"}>
                    <div className={"button is-rounded mx-6 px-6"}>
                        {"Trees : "}
                        {userScore.numOfTrees}
                    </div>

                    <div className={"button is-rounded mx-6 px-6"}>
                        {"Leafs : "}
                        {userScore.numOfLeafs}
                    </div>
                </div>

                <div className={"navbar-end"}>
                    <Gamelog />
                    <Scoreboard />
                    <Profile />
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

    return TEST2;
};

export default TopBar;

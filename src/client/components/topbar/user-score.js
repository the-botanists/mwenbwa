import React, {useState, useEffect} from "react";
import axios from "axios";

const sleep = ms => new Promise(r => setTimeout(r, ms));

const UserScore = () => {
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

    return (
        <div className={"container has-background-primary p-4"}>
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
        </div>
    );
};

export default UserScore;

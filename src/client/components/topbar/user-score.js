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
        <div className={"k-topbar__userScore"}>
            <div className={"k-topbar__score"}>
                <div className={"k-topbar__numberScore"}>
                    {" "}
                    {userScore.numOfTrees}
                </div>

                <div className={"k-treeIcon k-treeIcon--userScore"}> </div>
            </div>
            <div className={"k-topbar__score"}>
                <div className={"k-topbar__numberScore"}>
                    {" "}
                    {userScore.numOfLeafs}
                </div>
                <div className={"k-leafIcon k-leafIcon--userScore"} />
            </div>
        </div>
    );
};

export default UserScore;

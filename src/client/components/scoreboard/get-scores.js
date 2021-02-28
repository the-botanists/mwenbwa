import React, {useState, useEffect} from "react";
import classnames from "classnames";
import {useSpring, animated} from "react-spring";
import Loader from "../tools/loader";

function GetScores() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const textAppear = useSpring({
        from: {transform: "translateY(150%)"},
        to: {transform: "translateY(0)"},
        config: {mass: 1, tension: 400, friction: 12},
    });

    useEffect(() => {
        fetch("/api/scores")
            .then(res => res.json())
            .then(
                scores => {
                    setTimeout(() => {
                        setIsLoaded(true);
                    }, 3000);
                    setItems(scores);
                },
                err => {
                    setTimeout(() => {
                        setIsLoaded(true);
                        setError(err);
                    }, 3000);
                },
            );
    }, []);

    if (error) {
        return (
            <animated.tbody style={textAppear}>
                <tr>
                    <td colSpan={"3"}>{`Erreur : ${error.message}`}</td>
                </tr>
            </animated.tbody>
        );
    } else if (!isLoaded) {
        return <Loader />;
    }
    return (
        <>
            <tbody classnames={"k-tbody"}>
                {items.map((item, i) => {
                    let pos = i;
                    return (
                        <tr className={classnames("k-tableRow")} key={item._id}>
                            <th>{++pos}</th>
                            <td>{item.username}</td>
                            <td className={classnames("k-td")}>
                                {item.numOfTrees}
                            </td>
                            <td>
                                <div className={classnames("k-treeIcon")}>
                                    {" "}
                                </div>
                            </td>
                            <td className={classnames("k-td")}>
                                {item.numOfLeafs}
                            </td>
                            <td>
                                <div className={classnames("k-leafIcon")} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}

export default GetScores;

import React, {useState, useEffect} from "react";
import classnames from "classnames";
import {useSpring, animated} from "react-spring";
import Loader from "../tools/loader";
import moment from "moment";

const GetLogs = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const errorAppear = useSpring({
        from: {transform: "translateY(150%)"},
        to: {transform: "translateY(0)"},
        config: {mass: 1, tension: 400, friction: 12},
    });

    useEffect(() => {
        fetch("/api/gamelog/all")
            .then(res => res.json())
            .then(
                logs => {
                    setTimeout(() => {
                        setIsLoaded(true);
                    }, 3000);
                    setItems(logs);
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
            <animated.tbody style={errorAppear}>
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
                {items.map((item, i) => (
                    <tr className={classnames("k-tableRow")} key={i.toString()}>
                        <td>{item.username}</td>
                        <td className={classnames("k-td")}>{item.action}</td>
                        <td className={classnames("k-td")}>
                            {" "}
                            {moment(item.date).fromNow()}
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
};

export default GetLogs;

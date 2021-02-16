import React, {useState, useEffect} from "react";
import classnames from "classnames";

function GetScores() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost/api/scores")
            .then(res => res.json())
            .then(
                scores => {
                    setIsLoaded(true);
                    setItems(scores.slice(0, 10));
                },
                //errors must be handled here rather than in
                // a catch() block so that we don't swallow exceptions
                // due to real bugs in the components.
                err => {
                    setIsLoaded(true);
                    setError(err);
                },
            );
    }, []);

    if (error) {
        return (
            <tbody>
                <tr>
                    <td>{`Erreur : ${error.message}`}</td>
                </tr>
            </tbody>
        );
    } else if (!isLoaded) {
        return (
            <tbody>
                <tr>
                    <td>{"Chargement..."}</td>
                </tr>
            </tbody>
        );
    }
    return (
        <>
            <tbody classnames={"k-tbodyScore"}>
                {items.map((item, i) => {
                    let pos = i;
                    return (
                        <tr className={classnames("k-tableRow")} key={item._id}>
                            <th>{++pos}</th>
                            <td>{item.username}</td>
                            <td className={classnames("k-tdScore")}>
                                {item.numOfLeafs}
                            </td>
                            <td>
                                <div className={classnames("k-leafIcon")} />
                            </td>
                            <td className={classnames("k-tdScore")}>
                                {item.numOfTrees}
                            </td>
                            <td>
                                <div className={classnames("k-treeIcon")}>
                                    {" "}
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}

export default GetScores;

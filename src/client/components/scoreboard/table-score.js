import * as React from "react";
import classnames from "classnames";

const TableScore = () => (
    <>
        <div className={"k-titleScore"}>{"ScoreBoard"}</div>
        <table className={"table"}>
            <thead>
                <tr>
                    <th>
                        <div className={"k-searchIcon"} />
                    </th>
                    <th>{"User Name"}</th>
                    <th>{"Leafs"}</th>
                    <th />
                    <th> {"Trees"}</th>
                    <th />
                </tr>
            </thead>

            <tbody classnames={"k-tbodyScore"}>
                {Array.apply(0, new Array(8)).map((x, i) => {
                    console.log(i);
                    let pos = i;
                    console.log(pos);
                    return (
                        <tr
                            className={classnames("k-tableRow")}
                            key={i.toString()}>
                            <th>{++pos}</th>
                            <td>{"kevksar"}</td>
                            <td className={classnames("k-tdScore")}>
                                {Math.floor(Math.random() * 100000 + 1000)}
                            </td>
                            <td>
                                <div className={classnames("k-leafIcon")} />
                            </td>
                            <td className={classnames("k-tdScore")}>
                                {Math.floor(Math.random() * 10000 + 1)}
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
        </table>
    </>
);

export default TableScore;

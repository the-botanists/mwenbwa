import React from "react";
import GetLogs from "./get-logs";

const Tablegamelog = () => (
    <>
        <div className={"k-tableTitle"}>{"Gamelog"}</div>
        <table className={"table k-table"}>
            <thead className={"k-tableHead"}>
                <tr>
                    <th>{"User Name"}</th>
                    <th>{"Action"}</th>
                    <th> {"Time"}</th>
                </tr>
            </thead>
            {<GetLogs />}
            {/* <tbody classnames={"k-tbodyScore"}>
                    {Array.apply(0, new Array(8)).map((x, i) => {
                        let n = i;
                        return (
                            <tr
                                className={classnames("k-tableRow")}
                                key={i.toString()}>
                                <td>
                                    {n % 2 === 0
                                        ? "Henry_Moos2"
                                        : "AliceOnTheRoof"}
                                </td>
                                <td className={classnames("k-tdScore")}>
                                    {n % 2 === 0
                                        ? "Bought a tree"
                                        : "Lock a tree"}
                                </td>
                                <td className={classnames("k-tdScore")}>
                                    {`${++n} minute ago`}
                                </td>
                            </tr>
                        );
                    })}
                </tbody> */}
        </table>
    </>
);

export default Tablegamelog;

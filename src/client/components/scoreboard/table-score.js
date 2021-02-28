import * as React from "react";
import GetScores from "./get-scores";

const TableScore = () => (
    <>
        <div className={"k-tableTitle"}>{"ScoreBoard"}</div>
        <table className={"table is-hoverable k-table"}>
            <thead className={"k-tableHead"}>
                <tr>
                    <th>{"#"}</th>
                    <th>{"User Name"}</th>
                    <th>{"Trees"}</th>
                    <th />
                    <th> {"Leafs"}</th>
                    <th />
                </tr>
            </thead>
            <GetScores />
        </table>
    </>
);

export default TableScore;

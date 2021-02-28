import React from "react";
import GetLogs from "./get-logs";

const Tablegamelog = () => (
    <>
        <div className={"k-tableTitle"}>{"Gamelog"}</div>
        <table className={"table is-striped is-hoverable k-table"}>
            <thead className={"k-tableHead"}>
                <tr>
                    <th>{"User Name"}</th>
                    <th>{"Action"}</th>
                    <th> {"Time"}</th>
                </tr>
            </thead>
            {<GetLogs />}
        </table>
    </>
);

export default Tablegamelog;

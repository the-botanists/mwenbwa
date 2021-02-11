import * as React from "react";
import classnames from "classnames";

const TableScore = () => (
    <>
        <table className={"table"}>
            <thead>
                <tr>
                    <th>
                        <div className={"searchIcon"} />
                    </th>
                    <th>{"User Name"}</th>
                    <th>{"Leafs"}</th>
                    <th />
                    <th> {"Trees"}</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr className={classnames("tableRow")}>
                    <th>{"1"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"384546"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"2369"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("tableRow", "is-selected")}>
                    <th>{"2"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"2139"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("tableRow")}>
                    <th>{"3"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"384156"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"2390"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("tableRow")}>
                    <th>{"4"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"29"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("tableRow")}>
                    <th>{"5"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"1456"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"2309"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("tableRow")}>
                    <th>{"6"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"239"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("tableRow")}>
                    <th>{"7"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"239"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("tableRow")}>
                    <th>{"8"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("leafIcon")} />
                    </td>
                    <td className={classnames("tdScore")}>{"239"}</td>
                    <td>
                        <div className={classnames("treeIcon")}> </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

export default TableScore;

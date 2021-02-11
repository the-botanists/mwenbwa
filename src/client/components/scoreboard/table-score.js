import * as React from "react";
import classnames from "classnames";

const TableScore = () => (
    <>
        <h4 className={"k-titleScore"}>{"ScoreBoard"}</h4>
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
            <tbody>
                <tr className={classnames("k-tableRow")}>
                    <th>{"1"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"384546"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"2369"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("k-tableRow", "is-selected")}>
                    <th>{"2"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"2139"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("k-tableRow")}>
                    <th>{"3"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"384156"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"2390"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("k-tableRow")}>
                    <th>{"4"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"29"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("k-tableRow")}>
                    <th>{"5"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"1456"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"2309"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("k-tableRow")}>
                    <th>{"6"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"239"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("k-tableRow")}>
                    <th>{"7"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"239"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
                <tr className={classnames("k-tableRow")}>
                    <th>{"8"}</th>
                    <td>{"kevksar"}</td>
                    <td className={classnames("k-tdScore")}>{"38456"}</td>
                    <td>
                        <div className={classnames("k-leafIcon")} />
                    </td>
                    <td className={classnames("k-tdScore")}>{"239"}</td>
                    <td>
                        <div className={classnames("k-treeIcon")}> </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

export default TableScore;

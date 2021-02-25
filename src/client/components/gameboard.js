import * as React from "react";
import GameMap from "./map/mapview";
import TopBar from "./topbar";
// import Loader from "./reusable-components/loader";

class GameBoard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <TopBar />
                </div>
                <div>
                    <GameMap />
                </div>
            </div>
        );
    }
}

export default GameBoard;

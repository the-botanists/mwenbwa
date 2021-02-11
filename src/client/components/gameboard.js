import * as React from "react";
import GameMap from "./map";
import TopBar from "./topbar";

class GameBoard extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <GameMap />
            </div>
        );
    }
}

export default GameBoard;

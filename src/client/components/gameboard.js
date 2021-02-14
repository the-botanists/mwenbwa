import * as React from "react";
import GameMap from "./map";
import TopBar from "./topbar";

class GameBoard extends React.Component {
    render() {
        return (
            <>
                <TopBar />
                <GameMap />
            </>
        );
    }
}

export default GameBoard;

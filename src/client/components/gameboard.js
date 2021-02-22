import * as React from "react";
import GameMap from "./map/mapview";
import TopBar from "./topbar";
// import Loader from "./reusable-components/loader";

class GameBoard extends React.Component {
    render() {
        return (
            <>
                <TopBar />
                {/* <Loader/> */}
                <GameMap />
            </>
        );
    }
}

export default GameBoard;

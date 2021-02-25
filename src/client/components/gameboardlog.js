import * as React from "react";
import GameMap from "./map/mapview";
import TopBarLogin from "./toplogin";
// import Loader from "./reusable-components/loader";

class GameBoardLoad extends React.Component {
    render() {
        return (
            <>
                <TopBarLogin />
                {/* <Loader/> */}
                <GameMap />
            </>
        );
    }
}

export default GameBoardLoad;

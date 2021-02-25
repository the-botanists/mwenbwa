import * as React from "react";
import FooterBarLogin from "./footerlogin";
import GameMap from "./map/mapview";
import TopBarLogin from "./toplogin";
// import Loader from "./reusable-components/loader";

class GameBoardLoad extends React.Component {
    render() {
        return (
            <>
                <TopBarLogin />
                <GameMap />
                <FooterBarLogin />
            </>
        );
    }
}

export default GameBoardLoad;

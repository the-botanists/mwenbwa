import * as React from "react";
import GameMap from "./map/mapview";
import TopBar from "./topbar";
import FooterBarLogin from "./footerlogin";
// import Loader from "./reusable-components/loader";

class GameBoard extends React.Component {
    render() {
        return (
            <>
                <TopBar />
                <GameMap />
                <FooterBarLogin />
            </>
        );
    }
}

export default GameBoard;

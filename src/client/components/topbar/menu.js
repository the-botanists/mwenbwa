import React, {useState, useRef} from "react";
import {useSpring, config, animated, useChain} from "react-spring";

import Scoreboard from "../scoreboard/container/score-board";
import Gamelog from "../gamelog/container/gamelog";
import Profile from "../profile/container/profile";
const goLogOut = () => {
    sessionStorage.clear();
};

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    const showMenuRef = useRef();
    const animShowMenu = useSpring({
        ref: showMenuRef,
        to: [{transform: showMenu ? "translateY(0)" : "translateY(-20)"}],
        from: {transform: "translateY(-20rem)"},
        config: config.gentle,
    });

    const buttonAppearRef = useRef();
    const animButtonAppear = useSpring({
        ref: buttonAppearRef,
        to: [{transform: showMenu ? "translateX(0)" : "translateX(-20)"}],
        from: {transform: "translateX(-20rem)"},
    });

    useChain(
        showMenu
            ? [showMenuRef, buttonAppearRef]
            : [buttonAppearRef, showMenuRef],
        [0, showMenu ? 0.1 : 0.6],
    );

    return (
        <div className={"k-topbar__menu"}>
            <div className={"k-topbar__button--menu"} onClick={toggleMenu}>
                <div className={"k-topbar__buttonLabel--menu"}>{"Menu"}</div>
            </div>

            <animated.div className={"k-topbar__hideMenu"} style={animShowMenu}>
                <div style={animButtonAppear} className={"k-topbar__button"}>
                    <Gamelog />
                </div>

                <div style={animButtonAppear} className={"k-topbar__button"}>
                    <Scoreboard />
                </div>

                <div style={animButtonAppear} className={"k-topbar__button"}>
                    <Profile />
                </div>

                <div
                    style={animButtonAppear}
                    className={"k-topbar__button"}
                    onClick={goLogOut}>
                    <div className={"k-topbar__buttonLabel"}>{"Log Out"}</div>
                </div>
            </animated.div>
        </div>
    );
};

export default Menu;

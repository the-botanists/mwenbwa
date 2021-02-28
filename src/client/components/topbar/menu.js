import React, {useState, useRef} from "react";
import {useSpring, config, animated, useChain} from "react-spring";

import Scoreboard from "../scoreboard/container/score-board";
import Gamelog from "../gamelog/container/gamelog";
import Profile from "../profile/container/profile";
// import MenuReduced from "./menu-reduced";
const goLogOut = () => {
    sessionStorage.clear();
};

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    const showMenuRef = useRef();
    const animShowMenu = useSpring({
        ref: showMenuRef,
        to: [{transform: showMenu ? "translateY(-4)" : "translateY(-20rem)"}],
        from: {transform: "translateY(-20rem)"},
        config: config.gentle,
    });

    const buttonAppearRef = useRef();
    const animButtonAppear = useSpring({
        ref: buttonAppearRef,
        to: [{transform: showMenu ? "translateX(0)" : "translateX(-20rem)"}],
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
            <div className={"k-topbar__fixeMenu"}>
                <div className={"k-topbar__button--menu"} onClick={toggleMenu}>
                    {"Menu"}
                </div>
            </div>
            <animated.div className={"k-topbar__hideMenu"} style={animShowMenu}>
                <div
                    style={animButtonAppear}
                    className={"k-topbar__button k-topbar__button--score"}
                    onClick={toggleMenu}>
                    <Scoreboard />
                </div>
                <div
                    style={animButtonAppear}
                    className={"k-topbar__button k-topbar__button--profile"}
                    onClick={toggleMenu}>
                    <Profile />
                </div>
                <div
                    style={animButtonAppear}
                    className={"k-topbar__button k-topbar__button--gamelog"}
                    onClick={toggleMenu}>
                    <Gamelog />
                </div>
                <div
                    style={animButtonAppear}
                    className={"k-topbar__button"}
                    onClick={goLogOut}>
                    {"Log Out"}
                </div>
            </animated.div>
        </div>
    );
};

export default Menu;

import React, {useState, useRef} from "react";
import {useSpring, config, animated} from "react-spring";

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

    // const item1 = (
    //     <div className={"k-topbar__button"}>
    //         <Scoreboard />
    //     </div>
    // );
    // const item2 = (
    //     <div className={"k-topbar__button"}>
    //         <Profile />
    //     </div>
    // );
    // const item3 = (
    //     <div className={"k-topbar__button"}>
    //         <Gamelog />
    //     </div>
    // );
    // const item4 = (
    //     <div className={"k-topbar__button"} onClick={goLogOut}>
    //         {"Log Out"}
    //     </div>
    // );

    // const items = [item1, item2, item3, item4];

    const showMenuRef = useRef();
    const animShowMenu = useSpring({
        ref: showMenuRef,
        to: [{transform: showMenu ? "translateY(-4)" : "translateY(-20rem)"}],
        from: {transform: "translateY(-20rem)"},
        config: config.gentle,
    });

    // const buttonAppearRef = useRef();
    // const animButtonAppear = useSpring({
    //     ref: buttonAppearRef,
    //     to: [{transform: showMenu ? "translateX(0)" : "translateX(-20rem)"}],
    //     from: {transform: "translateX(-20rem)"},
    // });

    // useChain(
    //     showMenu
    //         ? [showMenuRef, buttonAppearRef]
    //         : [buttonAppearRef, showMenuRef],
    //     [0, showMenu ? 0.1 : 0.6],
    // );

    return (
        <div className={"k-topbar__menu"}>
            <div className={"k-topbar__fixeMenu"}>
                <div className={"k-topbar__button--menu"} onClick={toggleMenu}>
                    {"Menu"}
                </div>
            </div>
            <animated.div className={"k-topbar__hideMenu"} style={animShowMenu}>
                <div className={"k-topbar__button"}>
                    <Scoreboard />
                </div>
                <div className={"k-topbar__button"}>
                    <Profile />
                </div>
                <div className={"k-topbar__button"}>
                    <Gamelog />
                </div>
                <div className={"k-topbar__button"} onClick={goLogOut}>
                    {"Log Out"}
                </div>
            </animated.div>
        </div>
    );
};

export default Menu;
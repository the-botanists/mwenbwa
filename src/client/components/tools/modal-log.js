import * as React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import {useSpring, animated} from "react-spring";

const ModalLog = ({show = false, content, button1, button2}) => {
    //const 4 anims
    const calc = (x, y) => [
        -(y - window.innerHeight / 2) / 200,
        (x - window.innerWidth / 2) / 200,
        1.1,
    ];
    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const [modalMove, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {mass: 5, tension: 350, friction: 40},
    }));
    const startSetMove = () => set({xys: [0, 0, 1]});
    //end anims

    if (!show) {
        set({xys: [0, 0, 1]});
        return null;
    }

    return createPortal(
        <div className={classnames("k-modal k-modal--log")}>
            <animated.div
                className={classnames("box", "k-modal__box__log")}
                style={{transform: modalMove.xys.interpolate(trans)}}
                onMouseMove={({clientX: x, clientY: y}) =>
                    set({xys: calc(x, y)})
                }
                onMouseLeave={startSetMove}>
                {content}
                <div className={classnames("k-modal__btnsGroup")}>
                    {button1}
                    {button2}
                </div>
            </animated.div>
        </div>,
        document.querySelector("#modals"),
    );
};

ModalLog.propTypes = {
    show: PropTypes.bool,
    button1: PropTypes.element,
    button2: PropTypes.element,
    content: PropTypes.element,
};

export default ModalLog;

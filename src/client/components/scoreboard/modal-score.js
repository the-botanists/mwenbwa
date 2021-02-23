// import * as React from "react";
// import {createPortal} from "react-dom";
// import PropTypes from "prop-types";
// import classnames from "classnames";
// import {useSpring, animated} from "react-spring";

// import TableScore from "./table-score";

// const ModalScore = ({show = false, content, button1, button2}) => {
//     //const 4 anims
//     const calc = (x, y) => [
//         -(y - window.innerHeight / 2) / 200,
//         (x - window.innerWidth / 2) / 200,
//         1.1,
//     ];
//     const trans = (x, y, s) =>
//         `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

//     const [modalMove, set] = useSpring(() => ({
//         xys: [0, 0, 1],
//         config: {mass: 5, tension: 350, friction: 40},
//     }));
//     const startSetMove = () => set({xys: [0, 0, 1]});
//     //end anims

//     if (!show) {
//         return null;
//     }

//     return createPortal(
//         <div className={classnames("k-modal")}>
//             <animated.div
//                 className={classnames("box", "k-modal__box")}
//                 style={{transform: modalMove.xys.interpolate(trans)}}
//                 onMouseMove={({clientX: x, clientY: y}) =>
//                     set({xys: calc(x, y)})
//                 }
//                 onMouseLeave={startSetMove}>
//                 {content}
//                 <div className={classnames("k-modal__btnsGroup")}>
//                     {button1}
//                     {button2}
//                 </div>
//             </animated.div>
//         </div>,
//         document.querySelector("#modals"),
//     );
// };

// ModalScore.propTypes = {
//     show: PropTypes.bool,
//     onCloseModal: PropTypes.func.isRequired,
//     onShareScore: PropTypes.func,
//     button1: PropTypes.object, // component
//     button2: PropTypes.object, // component
//     content: PropTypes.object, // component
// };

// export default ModalScore;

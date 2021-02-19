import React from "react";
import "../../assets/css/loader.css";

const Loader = () => (
    <div className={"container"}>
        <div className={"load"}>
            <div className={"load__bar load__bar--1"} />
            <div className={"load__bar load__bar--2"} />
            <div className={"load__bar load__bar--3"} />
            <div className={"load__bar load__bar--4"} />
            <div className={"load__bar load__bar--5"} />
        </div>
        {/* <div className="load">
                <div className="load__bar load__bar--1-rev"></div>
                <div className="load__bar load__bar--2-rev"></div>
                <div className="load__bar load__bar--3-rev"></div>
                <div className="load__bar load__bar--4-rev"></div>
                <div className="load__bar load__bar--5-rev"></div>
            </div> */}
    </div>
);

// const items = range(4);
// const interp = i => r =>
//     `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

// function Loader() {
//     const {radians} = useSpring({
//         to: async next => {
//             while (1) {
//                 await next({radians: 2 * Math.PI});
//             }
//         },
//         from: {radians: 0},
//         config: {duration: 3500},
//         reset: true,
//     });
//     return (
//         <div className={"loader"}>
//             {items.map(i => (
//                 <animated.div
//                     key={i}
//                     className={"loader__element"}
//                     style={{transform: radians.interpolate(interp(i))}}
//                 />
//             ))}
//             ;
//         </div>
//     );
// }

export default Loader;

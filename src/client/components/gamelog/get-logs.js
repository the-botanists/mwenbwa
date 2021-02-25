// import React, {useState, useEffect} from "react";
// import classnames from "classnames";
// import {useSpring, animated} from "react-spring";
// import Loader from "../tools/loader";

// function GetLogs() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     const scoreAppear = useSpring({
//         from: {transform: "translateY(150%)"},
//         to: {transform: "translateY(0)"},
//         config: {mass: 1, tension: 400, friction: 12},
//     });

//     useEffect(() => {
//         fetch("/api/trees/buy/")
//             .then(res => res.json())
//             .then(
//                 tree => {
//                     setTimeout(() => {
//                         setIsLoaded(true);
//                     }, 3000);
//                     // debugger
//                     setItems(
//                         tree
//                             .slice(0, 8),
//                     );
//                 },
//                 /*errors must be handled here rather than in
//                 a catch() block so that we don't swallow exceptions
//                 due to real bugs in the components.*/
//                 err => {
//                     setIsLoaded(true);
//                     setError(err);
//                 },
//             );
//     }, []);

//     if (error) {
//         return (
//             <animated.tbody style={scoreAppear}>
//                 <tr>
//                     <td>{`Erreur : ${error.message}`}</td>
//                 </tr>
//             </animated.tbody>
//         );
//     } else if (!isLoaded) {
//         return (
//             <Loader />
//         );
//     }
//     return (
//         <>
//             <animated.tbody classnames={"k-tbody"} style={scoreAppear}>
//                 {items.map((item, i) => {
//                     return (
//                         <tr className={classnames("k-tableRow")} key={item._id}>
//                             <td>{item.username}</td>
//                             <td className={classnames("k-td")}>

//                             </td>
//                             <td className={classnames("k-td")}>

//                             </td>
//                         </tr>
//                     );
//                 })}
//             </animated.tbody>
//         </>
//     );
// }

// export default GetLogs;

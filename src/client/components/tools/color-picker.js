import React, {useState} from "react";
import {useSpring, animated, config} from "react-spring";

const ColorPicker = () => {
    const [color, setColor] = useState("#00D2FC");

    const [showPicker, setShowPicker] = useState(false);

    const colors = [
        "#FF6900",
        "#FCB900",
        "#7BDCB5",
        "#00D084",
        "#8ED1FC",
        "#0693E3",
        "#ABB8C3",
        "#EB144C",
        "#F78DA7",
        "#9900EF",
    ];

    const fadeStyles = useSpring({
        config: {...config.default},
        from: {transformOrigin: "left", transform: "scaleX(0)"},
        to: {
            transform: showPicker ? "scaleX(1)" : "scaleX(0)",
        },
    });

    return (
        <div className={"k-colorPicker "}>
            <div className={"k-colorPicker__selectedContainer"}>
                <div
                    onClick={() => setShowPicker(val => !val)}
                    className={"k-colorPicker__select"}
                    style={{backgroundColor: color}}
                />
            </div>
            <animated.div
                className={"k-colorPicker__selectedContainer"}
                style={fadeStyles}>
                {colors.map((colour, i) => {
                    const key = i;
                    return (
                        <div
                            key={key}
                            onClick={() => {
                                setColor(colour);
                                // setShowPicker((val) => !val);
                                console.log(colour);
                            }}
                            className={"k-colorPicker__select"}
                            style={{backgroundColor: colour}}
                        />
                    );
                })}
            </animated.div>
        </div>
    );
};

export default ColorPicker;

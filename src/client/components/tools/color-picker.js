import React, {useState} from "react";
import {GithubPicker} from "react-color";
import {useSpring, animated, config} from "react-spring";

/* 
to change default values & styles go to >>
node_modules\react-color\es\components\github\ */

const ColorPicker = () => {
    const [color, setColor] = useState("#00D2FC");
    console.log(color);

    const [showPicker, setShowPicker] = useState(false);

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
                    className={"k-colorPicker__selected"}
                    style={{backgroundColor: color}}
                />
            </div>

            {console.log(showPicker)}
            <animated.div style={fadeStyles}>
                <GithubPicker
                    open={open}
                    onClick={() => state => !state}
                    className={"k-colorPicker__picker"}
                    color={color}
                    onChangeComplete={colors => {
                        setColor(colors.hex);
                    }}
                />
            </animated.div>
        </div>
    );
};

export default ColorPicker;

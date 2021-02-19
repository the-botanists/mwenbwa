import React, {useState} from "react";
import {HuePicker} from "react-color";
import {useSpring, animated, config} from "react-spring";

const ColorPicker = () => {
    const [color, setColor] = useState("#00D2FC");
    console.log(color);

    const [showPicker, setShowPicker] = useState(false);

    const fadeStyles = useSpring({
        config: {...config.gentle},
        from: {transformOrigin: "left", transform: "scale(0)"},
        to: {
            transform: showPicker ? "scale(1)" : "scale(0)",
        },
    });

    return (
        <div className={"colorPicker "}>
            <div
                onClick={() => setShowPicker(val => !val)}
                className={"colorPicker__selected"}
                style={{backgroundColor: color}}
            />
            {console.log(showPicker)}
            <animated.div style={fadeStyles}>
                <HuePicker
                    open={open}
                    onClick={() => state => !state}
                    className={"colorPicker__picker"}
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

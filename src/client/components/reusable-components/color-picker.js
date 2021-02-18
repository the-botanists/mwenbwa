import React, {useState} from "react";
import {HuePicker} from "react-color";

const ColorPicker = () => {
    const [color, setColor] = useState("#00D2FC");
    console.log(color);
    return (
        <div className={"colorPicker "}>
            <HuePicker
                className={"colorPicker__picker"}
                color={color}
                onChangeComplete={colors => {
                    setColor(colors.hex);
                }}
            />
            <div
                className={"colorPicker__selected"}
                style={{backgroundColor: color}}
            />
        </div>
    );
};

export default ColorPicker;

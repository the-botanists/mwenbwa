import React from "react";
import Button from "./button";

const ButtonScore = () => (
    <div>
        <Button label={"Score"} onClick={() => console.log("Click!")} />
    </div>
);

export default ButtonScore;

import React from "react";
import Button from "./button";

const ButtonScore = ({onOpenModal}) => (
    <div>
        <Button label={"Score"} onClick={onOpenModal} />
    </div>
);

export default ButtonScore;

import React, {useState} from "react";

import Modal from "../../tools/modal";
import ButtonScore from "../button-score";
import TableScore from "../table-score";
import Button from "../../tools/button";

const Scoreboard = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const handleShareScore = () => {
        console.log("shared!");
    };

    const button1 = (
        <Button
            className={"button is-rounded k-modal__button"}
            label={"Share"}
            onClick={handleShareScore}
        />
    );
    const button2 = (
        <Button
            className={"button  is-rounded k-modal__button"}
            label={"Close"}
            onClick={toggleModal}
        />
    );

    return (
        <div>
            <ButtonScore onOpenModal={toggleModal} />
            <Modal
                show={showModal}
                content={<TableScore />}
                button1={button1}
                button2={button2}
            />
        </div>
    );
};

export default Scoreboard;

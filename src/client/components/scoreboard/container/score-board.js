import React, {useState} from "react";

import Modal from "../../tools/modal";
import ButtonScore from "../button-score";
import TableScore from "../table-score";
import Button from "../../tools/button";

const Scoreboard = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShareScore = () => {
        console.log("shared!");
    };

    const button1 = (
        <Button
            className={"button is-success is-rounded"}
            label={"Share"}
            onClick={handleShareScore}
        />
    );
    const button2 = (
        <Button
            className={"button is-success is-rounded"}
            label={"Close"}
            onClick={handleCloseModal}
        />
    );

    return (
        <div>
            <ButtonScore onOpenModal={handleOpenModal} />
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

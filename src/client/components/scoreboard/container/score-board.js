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

    return (
        <div>
            <ButtonScore onOpenModal={handleOpenModal} />
            <Modal
                show={showModal}
                content={<TableScore />}
                button1={<Button label={"Share"} onClick={handleShareScore} />}
                button2={<Button label={"Close"} onClick={handleCloseModal} />}
            />
        </div>
    );
};

export default Scoreboard;

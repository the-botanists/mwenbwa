import React, {useState} from "react";

import ButtonScore from "../button-score";
import ModalScore from "../modal-score";

const Scoreboard = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div>
            <ButtonScore onOpenModal={handleOpenModal} />
            <ModalScore show={showModal} />
        </div>
    );
};

export default Scoreboard;

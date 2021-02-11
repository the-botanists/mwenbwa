import React, {useState} from "react";

import ButtonScore from "../button-score";
import ModalScore from "../modal-score";

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
            <ModalScore
                show={showModal}
                onCloseModal={handleCloseModal}
                onShareScore={handleShareScore}
            />
        </div>
    );
};

export default Scoreboard;

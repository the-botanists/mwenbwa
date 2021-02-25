import React, {useState} from "react";

import Modal from "../../tools/modal";
import ButtonGamelog from "../button-gamelog";
import Tablegamelog from "../table-gamelog";
import Button from "../../tools/button";

const Gamelog = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const gamelogContent = (
        <Tablegamelog
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
        />
    );

    return (
        <div>
            <ButtonGamelog onOpenModal={handleOpenModal} />
            <Modal
                show={showModal}
                content={gamelogContent}
                // button1={<Button label={"Share"} onClick={} />}
                button2={<Button label={"Close"} onClick={handleCloseModal} />}
            />
        </div>
    );
};

export default Gamelog;

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

    const button = (
        <Button
            className={"button  k-modal__button is-rounded"}
            label={"Close"}
            onClick={handleCloseModal}
        />
    );
    return (
        <div>
            <ButtonGamelog onOpenModal={handleOpenModal} />
            <Modal show={showModal} content={gamelogContent} button2={button} />
        </div>
    );
};

export default Gamelog;

import React, {useState} from "react";
import Modal from "../../tools/modal";
import ButtonGamelog from "../button-gamelog";
import Tablegamelog from "../table-gamelog";
import Button from "../../tools/button";

const Gamelog = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const gamelogContent = (
        <Tablegamelog onOpenModal={toggleModal} onCloseModal={toggleModal} />
    );

    const button = (
        <Button
            className={"button  k-modal__button is-rounded"}
            label={"Close"}
            onClick={toggleModal}
        />
    );
    return (
        <div>
            <ButtonGamelog onOpenModal={toggleModal} />
            <Modal show={showModal} content={gamelogContent} button2={button} />
        </div>
    );
};

export default Gamelog;

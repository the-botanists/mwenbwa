import React, {useState} from "react";

import Modal from "../../tools/modal";
import ButtonProfile from "../button-profile";
import FormProfile from "../forms-profile";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const form = (
        <FormProfile onOpenModal={toggleModal} onCloseModal={toggleModal} />
    );

    return (
        <div>
            <ButtonProfile onOpenModal={toggleModal} />
            <Modal show={showModal} content={form} />
        </div>
    );
};

export default Profile;

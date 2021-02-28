import React, {useState} from "react";
import Modal from "../../tools/modal";
import ButtonProfile from "../button-profile";
import FormProfile from "../forms-profile";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const form = (
        <FormProfile
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
        />
    );

    return (
        <div>
            <ButtonProfile onOpenModal={handleOpenModal} />
            <Modal show={showModal} content={form} />
        </div>
    );
};

export default Profile;

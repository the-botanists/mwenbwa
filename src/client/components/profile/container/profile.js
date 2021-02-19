import React, {useState} from "react";
import ButtonProfile from "../button-profile";
import ModalProfile from "../modal-profile";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveProfile = () => {
        console.log("saved !");
        setShowModal(false);
    };

    return (
        <div>
            <ButtonProfile onOpenModal={handleOpenModal} />
            <ModalProfile
                show={showModal}
                onCloseModal={handleCloseModal}
                onSaveProfile={handleSaveProfile}
            />
        </div>
    );
};

export default Profile;

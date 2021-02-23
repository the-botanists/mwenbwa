import React, {useState} from "react";

import Modal from "../../tools/modal";
import ButtonProfile from "../button-profile";
import FormProfile from "../forms-profile";
import Button from "../../tools/button";

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
        // setShowModal(false);
    };

    return (
        <div>
            <ButtonProfile onOpenModal={handleOpenModal} />
            <Modal
                show={showModal}
                content={<FormProfile />}
                button1={<Button label={"Save"} onClick={handleSaveProfile} />}
                button2={<Button label={"Cancel"} onClick={handleCloseModal} />}
            />
        </div>
    );
};

export default Profile;

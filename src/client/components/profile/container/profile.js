import React, {useState} from "react";
import ButtonProfile from "../button-profile";
import ModalProfile from "../modal-profile";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    // const [username, setUsername] = useState("");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [Color, setColor] = useState("");

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

    // const handleChangeUser = () => {
    //     setUsername()
    // };

    return (
        <div>
            <ButtonProfile onOpenModal={handleOpenModal} />
            <ModalProfile
                show={showModal}
                onCloseModal={handleCloseModal}
                onSaveProfile={handleSaveProfile}
                // onChangeUser={handleChangeUser}
            />
        </div>
    );
};

export default Profile;

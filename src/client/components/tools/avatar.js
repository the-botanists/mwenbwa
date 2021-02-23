import React from "react";
const md5 = require("md5");

const Avatar = ({emailToHash}) => {
    const emailHash = md5(emailToHash.trim().toLowerCase());

    return (
        <>
            <div className={"k-avatar"}>
                <img
                    className={"k-avatar__content "}
                    src={`https://www.gravatar.com/avatar/${emailHash}?d=identicon `}
                    alt={""}
                />
            </div>
        </>
    );
};

Avatar.propTypes = {};

export default Avatar;

import { useState, useEffect } from "react";

import { profiles } from '/src/users/profiles.js';

function ProfileImage({ idProfile, size }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(profiles);
    }, []);

    const user = users.find(user => user.id === idProfile);

    const sizeWidth = size;

    return (
        <>
            {user && <img src={user.photo} alt={user.name} className={`rounded-full object-cover w-[${sizeWidth}]`}></img>}
        </>
    )
}

export default ProfileImage;
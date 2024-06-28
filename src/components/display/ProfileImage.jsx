import { useState, useEffect } from "react";
import { profiles } from '/src/utils/profiles.js';

function ProfileImage({ idProfile, size }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(profiles);
    }, []);

    const user = users.find(user => user.id === idProfile);

    return (
        <>
            {user && (
                <img
                    src={user.photo}
                    alt={user.name}
                    className={`rounded-full object-cover`}
                    style={{ width: size, height: size }}
                />
            )}
        </>
    );
}

export default ProfileImage;

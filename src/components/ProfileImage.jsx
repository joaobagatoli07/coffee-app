function ProfileImage({ src, userName }) {
    return (
        <>
            <img src={src} alt={userName}></img>
        </>
    )
}

export default ProfileImage
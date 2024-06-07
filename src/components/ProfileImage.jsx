function ProfileImage({ src, userName, size }) {
    return (
        <>
            <img src={src} alt={userName} className={`rounded-full h-${size} w-${size}`}></img>
        </>
    )
}

export default ProfileImage
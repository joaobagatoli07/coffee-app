function AuthButton({ text, color }) {
    return (
        <>
            <button
                type="button"
                className={`${color} text-white p-2 rounded text-lg w-64`}>
                {text}
            </button>
        </>
    )
}

export default AuthButton

function Input({ type, placeholder }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className="placeholder:text-stone-700 p-2 drop-shadow rounded w-72" />
        </>
    )
}

export default Input
function FilterButton({ text, onClick }) {
    return (
        <>
            <div>
                <button
                    className="h-8 w-36 text-xs border border-solid border-amber-950 rounded-md text-black hover:bg-amber-950 hover:text-white"
                    onClick={onClick}>
                    {text}
                </button>
            </div>
        </>
    );
}

export default FilterButton;

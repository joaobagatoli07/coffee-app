function FilterButton({ text }) {
    return (
        <>
            <div>
                <button className={`bg-gray-300 text-xs rounded-md w-36 text-black h-8`}>{text}</button>
            </div>
        </>
    );
}

export default FilterButton;

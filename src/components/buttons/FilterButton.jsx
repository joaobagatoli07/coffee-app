function FilterButton({ text, color }) {
    return (
        <>
            <button className={`${color} text-xs rounded-md w-36 text-white h-8`}>{text}</button>
        </>
    );
}

export default FilterButton;

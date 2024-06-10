function FilterButton({ text, color }) {
    return (
        <div className="flex gap-4 w-full justify-center h-screen items-center text-xs">
            <button className={`${color} rounded-md w-36 text-white h-8`}>{text}</button>
        </div>
    );
}

export default FilterButton;

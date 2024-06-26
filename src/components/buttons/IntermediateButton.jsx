function IntermediateButton({ text, onClick }) {
    return (
        <button className="p-1 w-full text-sm w-40 rounded-md bg-amber-800 text-white" onClick={onClick}>{text}</button>
    );
}

export default IntermediateButton;
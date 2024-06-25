import { CirclePlus } from "lucide-react"

function PlusButton( {className} ){
    return (
        <>
            <button className={`p-2 ${className}`}>
                <CirclePlus className="stroke-amber-950 hover:text-white hover:bg-gray-300 rounded-[12px] transition duration-300 ease-in-out transform "/>
            </button>
        </>
    )
}

export default PlusButton
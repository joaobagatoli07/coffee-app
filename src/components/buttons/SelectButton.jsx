
function SelectButton({text}) {
    return (
        <div className="flex p-6 pl-4 bg-gray-300 gap-2 w-[400px] rounded-xl" >
            <div className="flex ">
                <text>Comprar agora</text>
            </div>
            <div className="">
                <text>Retirar</text> 
            </div>
        </div>
    )
}

export default SelectButton
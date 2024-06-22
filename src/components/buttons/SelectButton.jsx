
function SelectButton({text}) {
    return (
        <div className="flex h-10 w-72 rounded-md relative">
            <div className="flex absolute top-[0px] right-[4%] h-full w-1/2 justify-center items-center border-y border-r rounded-md rounded-ss-none rounded-es-none border-amber-950  text-black hover:bg-amber-950 hover:text-white">
                Retirar
            </div>
            <div className="flex h-full w-1/2 justify-center items-center border rounded-md border-amber-950  text-black hover:bg-amber-950 hover:text-white">
                Comprar agora 
            </div>
        </div>
    )
}

export default SelectButton

function SelectButton() {
    return (
        <div className="flex" >
            <div className="flex h-10 w-72 mr-2 justify-evenly rounded-md relative">
                <div className="flex h-full w-5/12 justify-center items-center border rounded-md border-amber-950  text-black hover:bg-amber-950 hover:text-white">
                    Retirar
                </div>
                <div className="flex h-full w-5/12 justify-center items-center border rounded-md border-amber-950  text-black hover:bg-amber-950 hover:text-white">
                    Comprar agora
                </div>
            </div>
        </div>

    )
}

export default SelectButton
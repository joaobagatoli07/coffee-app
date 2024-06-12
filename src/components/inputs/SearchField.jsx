import { Search } from "lucide-react"

function SearchField() {
    return (
        <div className="flex p-3 pl-5 bg-slate-200 gap-2 w-[400px] rounded-xl" >
            <Search></Search>
            <input placeholder="Buscar" className="w-full bg-transparent outline-none placeholder:text-black" type="text"  /> 
        </div>
    )
}

export default SearchField
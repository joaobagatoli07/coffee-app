import { Search } from "lucide-react"
import { useState } from "react";

function SearchField() {
    const [search, setSearch] = useState();

    return (
        <div className="flex p-3 pl-5 bg-slate-200 gap-2 w-[400px] rounded-xl" >
            <Search></Search>
            <input 
                type="text" 
                placeholder="Buscar" 
                onChange={e => setSearch(e.target.value)} 
                className="w-full bg-transparent outline-none placeholder:text-black"  /> 
        </div>
    )
}

export default SearchField
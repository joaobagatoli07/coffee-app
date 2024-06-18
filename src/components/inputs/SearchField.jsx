import { Search } from "lucide-react";

function SearchField({ onChange }) {
  return (
    <div className="flex p-3 pl-5 border border-amber-950 gap-2 w-[400px] rounded-xl">
      <Search></Search>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent outline-none placeholder:text-black"
      />
    </div>
  );
}

export default SearchField;

import { useLocation } from "react-router-dom";
import { items } from "../data/items";
import { Heart } from "lucide-react";
import CoffeSizes from "../components/cards/CoffeeSizes";

function Coffee() {
    const location = useLocation();
    const { title } = location.state || {};
    const coffee = items.find(coffee => coffee.title == title);

    return (
        <>
            <div className="h-screen flex justify-center">
                <main className="w-4/5">
                    <section className="flex mt-10">
                        <div className="w-11/12 flex justify-center">
                            <span className="font-rosarivo text-4xl text-amber-800">Detalhes</span>
                        </div>
                        <div className="w-1/12">
                            <Heart size={30} className="stroke-amber-800" />
                        </div>
                    </section>
                    <section className="flex mt-10 h-72">
                        <div className="flex w-3/5 items-center justify-center">
                            <div className="flex w-11/12 h-5/6 rounded-lg border-solid bg-zinc-100 border-gray-800 shadow-[_10px_10px_15px_rgba(0,0,0,0.1)]">
                                <div className="flex w-2/4 items-center justify-center" >
                                    <div className="flex w-11/12 h-3/4 rounded-lg">
                                        <img  className="h-full object-cover w-full rounded"   src={coffee.image} alt={coffee.title} />
                                    </div>
                                </div>
                                <div className="flex w-2/4 items-center">
                                    <div className="flex-col w-10/12 justify-center">
                                        <div className="text-xl text-amber-800">{coffee.title}</div>
                                        <div className="text-xs text-black">{coffee.subtitle}</div>
                                        <div className="text-xl text-amber-800">Descrição</div>
                                        <div className="text-xs text-black">{coffee.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-2/5 items-center justify-center">
                            <div className="flex items-center justify-center w-11/12 h-5/6 bg-zinc-100 rounded-lg shadow-[_10px_10px_25px_rgba(0,0,0,0.1)] border-solid border-slate-200">
                                <CoffeSizes />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Coffee
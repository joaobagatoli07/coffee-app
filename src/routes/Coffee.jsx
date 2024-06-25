import { useLocation } from "react-router-dom";
import { items } from "../utils/items";
import { Heart } from "lucide-react";
import {CoffeePrice} from "../components/cards/CoffeePrice";

function Coffee() {
    const location = useLocation();
    const { title } = location.state || {};
    const coffee = items.find(coffee => coffee.title == title)

    return (
        <>
            <div className="h-screen flex justify-center">
                <main className="w-4/5">
                    <section className="flex mt-10 mt">
                        <div className="w-11/12 flex justify-center">
                            <span className="font-rosarivo text-4xl text-amber-800">Detalhes</span>
                        </div>
                        <div className="w-1/12">
                            <Heart size={30} className="stroke-amber-800" />
                        </div>
                    </section>
                    <section className="flex mt-10 h-96">
                        <div className="flex w-3/5 items-center justify-center ">
                            <div className="flex w-11/12 h-5/6 rounded-lg border-solid bg-zinc-100 border-gray-800 shadow-[_10px_10px_15px_rgba(0,0,0,0.1)]">
                                <div className="flex w-2/4 items-center justify-center" >
                                    <div className="flex w-11/12 h-3/6 rounded-lg bg-green-300">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className="flex w-2/4 items-center justify-center">
                                    <div className="flex-row w-11/12 h-5/6 rounded-lg">
                                        <div className="flex w-full h-1/4 bg-blue-200">

                                        </div>
                                        <div className="flex w-full h-3/4 bg-blue-300">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-2/5 items-center justify-center">
                            <div className="flex w-11/12 h-5/6 bg-zinc-100 rounded-lg shadow-[_10px_10px_25px_rgba(0,0,0,0.1)] border-solid border-slate-200">
                                <CoffeePrice></CoffeePrice>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Coffee
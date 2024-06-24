import { useLocation } from "react-router-dom";
import { items } from "../utils/items";
import { Heart } from "lucide-react";

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
                            <div className="flex w-11/12 h-5/6 rounded-lg border-solid border-gray-800 shadow-[_10px_10px_15px_rgba(0,0,0,0.1)]">

                            </div>                                                                                              


                            {/* <div class="flex h-52 w-96 shadow-lg rounded-lg border border-solid border-slate-300 --- drop-shadow-md border-solid">
                                <div class="flex justify-center w-2/5" >
                                    <img src={imgSrc} className="flex h-32 w-62 justify-center mt-6 rounded-lg" alt={title} />
                                </div>
                                <div className="w-3/5 ">

                                </div>
                            </div> */}
                        </div>
                        <div className="flex w-2/5 items-center justify-center">
                            <div className="flex w-11/12 h-5/6 rounded-lg shadow-[_10px_10px_25px_rgba(0,0,0,0.1)] border-solid border-slate-200">

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Coffee
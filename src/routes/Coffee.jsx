import { useLocation } from "react-router-dom"
import CoffeeDetails from "../components/cards/CoffeeDetails";
import { Heart } from "lucide-react";

function Coffee() {
    const location = useLocation();
    const { title } = location.state || {};

    return (
        <>
            <div className="h-screen flex justify-center">
                <main className="w-4/5">
                    <section className="flex">
                        <div className="w-11/12 flex justify-center">
                            <span className="font-rosarivo">Detalhes</span>
                        </div>
                        <div className="w-1/12">
                            <Heart size={30} />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Coffee
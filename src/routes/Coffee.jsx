import { useLocation } from "react-router-dom"
import CoffeeDetails from "../components/cards/CoffeeDetails";

function Coffee() {
    const location = useLocation();
    const { imgSrc, title, subtitle, price } = location.state || {};

    return (
        <>
            <main className="bg-blue-100 h-screen w-screen">

            </main>
        </>


    )
}

export default Coffee
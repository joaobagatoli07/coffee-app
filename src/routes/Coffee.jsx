import { useLocation } from "react-router-dom"
import CoffeeDetails from "../components/cards/CoffeeDetails";

function Coffee(){
    const location = useLocation();
    const { imgSrc, title, subtitle, price } = location.state || {};

    return (
        <>
        <h1>{title}</h1>
        <CoffeeDetails imgSrc="src/assets/images/coffee/product/Caramel_Macchiato4.png" />
        </>
        
        
    )
}

export default Coffee
import { useLocation } from "react-router-dom"

function Coffee(){
    const location = useLocation();
    const { imgSrc, title, subtitle, price } = location.state || {};

    return (
        <h1>{title}</h1>
    )
}

export default Coffee
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";

function CoffeeResume({ product, description, size, price, quantity, imageUrl }) {

    return (
        <div className=" flex justify-center items-center text-white bg-amber-900 w-[350px] h-[150px] rounded-[12px]">
            <div>
                <img src={imageUrl = "./src/assets/images/coffee/product/Expresso1.png"} className="w-[110px] h-[84px] rounded-[12px] mr-[10px]" alt="coffeImage" />
            </div>

            <div className="flex flex-col mr-[20px] text-[14px]" >
                <p className="text-[20px]">{product = "Expresso"}</p>
                <p>{description = "Sem leite"}</p>
                <p>{size = "Médio"}</p>
                <p>{price = "R$5,50"}</p>
            </div>

            <div className="flex gap-[5px]">
                <button><CircleMinus></CircleMinus></button>
                <p>{quantity = "1"}</p>
                <button><CirclePlus></CirclePlus></button>
            </div>
        </div>
    )
}

export default CoffeeResume;
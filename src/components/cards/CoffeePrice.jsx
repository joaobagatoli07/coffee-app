import { Tag } from "lucide-react";

function CoffeePrice() {

    return (
        <div className="flex flex-col bg-amber-900 w-[400px] h-[200px] text-white rounded-[16px] items-center justify-center gap-2  ">
            <div className="bg-white text-black flex items-center justify-center w-[235px] h-[30px] mt-[10px] rounded-[8px]">
                <a className="flex gap-2 mr-[130px]" href="#">
                    <Tag className=""/>
                    <button>Cupom</button>
                </a>
            </div>
            
            <div className="flex text-[15px] p-[16px] gap-16">
                <div>
                    <p>Subtotal</p>
                    <p>Taxa de entrega</p>
                    <p>Cupom</p>
                </div>

                <div>
                    <p>R$ 12,00</p>
                    <p>R$ 5,00</p>
                    <p>R$ 2,00</p>
                </div>
            </div>
        </div>

    )
}

export default CoffeePrice;
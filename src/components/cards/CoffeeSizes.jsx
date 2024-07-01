import { GlassWater } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function CoffeSizes() {
    const navigate = useNavigate();

    function navigateToCartPage() {
        navigate("/carrinho");
    }

    return (
        <div className='flex flex-col justify-center items-center gap-3 w-[270px] m-0'>
            <div className='flex flex-col items-center gap-0'>
                <h1 className='text-amber-900 font-bold text-xl'>Tamanhos</h1>
            </div>
            <div className='w-4/5 h-[2px] bg-amber-900' />
            <div className='flex justify-between w-full'>
                <div className='flex flex-col justify-center items-center bg-amber-900 rounded w-[70px] h-[90px] text-white hover:bg-gray-100 hover:text-amber-900'>
                    <div className='icone'>
                        <button className='onn'><GlassWater size={40}></GlassWater></button>
                    </div>
                    <p>Pequeno</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-amber-900 rounded w-[70px] h-[90px] text-white hover:bg-gray-100 hover:text-amber-900'>
                    <div className='icone'>
                        <button className='onn'><GlassWater size={40}></GlassWater></button>
                    </div>
                    <p>Médio</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-amber-900 rounded w-[70px] h-[90px] text-white hover:bg-gray-100 hover:text-amber-900'>
                    <div className='icone'>
                        <button className='onn'><GlassWater size={40}></GlassWater></button>
                    </div>
                    <p>Grande</p>
                </div>
            </div>
            <div className='flex justify-between items-center w-full'>
                <div className='preço'>
                    <p>Preço</p>
                    <p className='text-amber-900'>R$ 18,50</p>
                </div>
                <button className='flex justify-center items-center bg-amber-900 rounded text-white p-2 hover:bg-gray-100 hover:text-amber-900' onClick={navigateToCartPage}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default CoffeSizes;
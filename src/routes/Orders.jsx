import { useNavigate } from 'react-router-dom'

function Orders() {
    const navigate = useNavigate()
    
    function redirectToHomePage() {
        navigate('/')
    }

    return (
        <div className="h-screen flex justify-center">
            <main className="w-4/5">
                <section className="flex-col mt-10">
                    <div className="w-11/12 flex justify-center">
                        <span className="font-rosarivo text-4xl text-amber-800">Pedidos</span>
                    </div>
                </section>
                <section className="flex mt-10 h-72 justify-center ">
                    <div className="flex w-4/6 h-4/6 rounded-lg border-solid  bg-yellow-900 border-gray-800 shadow-[_10px_10px_15px_rgba(0,0,0,0.1)] justify-center items-center">
                        <div className="flex-col w-11/12 h-5/6">
                            <div className='flex-col h-3/5 '>
                                <div className="text-2xl text-stone-50 ">Ops...Você ainda não possui pedidos...</div>
                                
                                <div className="text-base text-stone-50 mt-2">Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</div>
                            </div>
                            <div className='flex h-2/5 justify-end items-end'>
                                <div className='flex h-3/4 w-2/6'>
                                    <button className='flex w-full items-center justify-center bg-gray-50 rounded-lg' onClick={redirectToHomePage}>Página Inicial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Orders
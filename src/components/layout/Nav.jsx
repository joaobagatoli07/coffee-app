import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo'

function Nav() {
    let isUserLogged = false;

    return (
        <header className='w-full flex justify-center items-center bg-amber-950 text-white text-sm pt-2 pb-2'>
            <div className='w-1/5'>
                <Logo width='35' height='51'></Logo>
            </div>
            <nav className='w-2/5 flex justify-center gap-12'>
                <div><Link to='/Home'>Home</Link></div>
                <div><Link to='/Carrinho'>Carrinho</Link></div>
                <div><Link to='/Pedidos'>Pedidos</Link></div>
            </nav>
            <div className='w-1/5 flex justify-end gap-5'>
                {isUserLogged ? (
                    <div>Foto</div>
                ) : (
                    <>
                        <div><Link to='/'>Login</Link></div>
                        <div><Link to='/Cadastro'>Cadastre-se</Link></div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Nav
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo.jsx'
import ProfileImage from '../display/ProfileImage.jsx';

function Nav({ resetCoffees }) {
    const isUserLogged = localStorage.getItem('userLogged');

    return (
        <header className='flex justify-center items-center bg-amber-950 text-white text-sm pt-2 pb-2'>
            <div className='sm:w-1/5'>
                <Link to='/' onClick={resetCoffees}><Logo width='35' height='51'></Logo></Link>
            </div>
            <nav className='sm:w-2/5 flex justify-center gap-12'>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/carrinho'>Carrinho</Link></div>
                <div><Link to='/pedidos'>Pedidos</Link></div>
            </nav>
            <div className='sm:w-1/5 flex justify-end gap-5'>
                {isUserLogged ? (
                    <Link to="/perfil">
                        <ProfileImage
                            idProfile={1}
                            size={40}>
                        </ProfileImage>
                    </Link>
                ) : (
                    <>
                        <div><Link to='/login'>Login</Link></div>
                        <div><Link to='/cadastro'>Cadastre-se</Link></div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Nav
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo'
import ProfileImage from '../ProfileImage';

function Nav() {
    const isUserLogged = true;

    return (
        <header className='w-full flex justify-center items-center bg-amber-950 text-white text-sm pt-2 pb-2'>
            <div className='sm:w-1/5'>
                <Link to='/Home'><Logo width='35' height='51'></Logo></Link>
            </div>
            <nav className='sm:w-2/5 flex justify-center gap-12'>
                <div><Link to='/Home'>Home</Link></div>
                <div><Link to='/Carrinho'>Carrinho</Link></div>
                <div><Link to='/Pedidos'>Pedidos</Link></div>
            </nav>
            <div className='sm:w-1/5 flex justify-end gap-5'>
                {isUserLogged ? (
                    <div>
                        <ProfileImage 
                            src="src/assets/images/profilePicture.jpg" 
                            userName="João" 
                            size="12">
                        </ProfileImage>
                    </div>
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
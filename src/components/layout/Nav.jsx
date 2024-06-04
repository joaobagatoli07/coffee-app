import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo'

function Nav(){
    let isUserLogged = false;

    return (
        <nav className="container flex w-full bg-amber-950 text-white">
            <div className="columns-4">
                <div>
                    <Logo></Logo>
                </div>
            </div>
            <div className="columns-4">
                <div><Link to="/Home">Home</Link></div>
                <div><Link to="/Carrinho">Carrinho</Link></div>
                <div><Link to="/Pedidos">Pedidos</Link></div>
            </div>
            <div className="columns-4">
            {isUserLogged ? (
                <div>Oi</div>
                ) : (
                    <div><Link to="/">Login</Link></div>
                )}
            </div>
        </nav>     
    )
}

export default Nav
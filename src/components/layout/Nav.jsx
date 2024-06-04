import { Link } from 'react-router-dom'

function Nav(){
    let isUserLogged = false;

    return (
        <nav className="container flex w-full">
            <div className="columns-4">
                <div>Icone</div>
            </div>
            <div className="columns-4">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/Carrinho">Carrinho</Link></div>
                <div><Link to="/Pedidos">Pedidos</Link></div>
            </div>
            <div className="columns-4">
            {isUserLogged ? (
                <div>Oi</div>
                ) : (
                    <div>Login</div>
                )}
            </div>
        </nav>     
    )
}

export default Nav
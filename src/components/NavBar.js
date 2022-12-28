import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
        <nav className="lista">
                <li className="btn"><a href="">Inicio</a></li>
                <li className="btn"><a href="">Categorias</a></li>
                <li className="btn"><a href="">Carrito</a></li>
                <CartWidget/>
        </nav>
    
    )
}

export default NavBar;
import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {


    return (
    <nav className="navbar">
        <img className="icon-navbar" src="/img/logo.jpg"/>
        <ul className="opciones">
            <li>Productos</li>
            <li>Clientes</li>
            <li>Contactos</li>
        </ul>
        <CartWidget/>
    </nav>
    )
}

export default NavBar

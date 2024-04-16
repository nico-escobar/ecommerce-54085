import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom" 

const NavBar = () => {


    return (
    <nav className="navbar">
        <Link to="/">
            <img className="icon-navbar" src="/img/logo.jpg"/>
        </Link>
        <ul className="opciones">
            <Link to="/category/coya">COYA</Link>
            <Link to="/category/gaucho">GAUCHO</Link>
            <Link to="/category/sureño">SUREÑO</Link>
        </ul>
        <CartWidget/>
    </nav>
    )
}

export default NavBar

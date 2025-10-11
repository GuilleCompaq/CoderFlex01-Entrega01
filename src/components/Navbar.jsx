import "../css/Navbar.css"
import CarWidget from "./CartWidget"

const Navbar = () =>{
    return(
        <nav className="navbar-container">
             <a className ="a" href="">
                <img src="../React.png" alt="logo" className="logo"/>
             </a>
             <a className ="a" href="">Ofertas</a>
             <a className ="a" href="">Mas Vendidos</a>
             <a className ="a" href="">Nuevos</a>
             <CarWidget/>
        </nav>

    )
}
export default Navbar
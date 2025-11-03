import "../css/Navbar.css";
import CarWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink className="a" to="/">
        <img src="../React.png" alt="logo" className="logo" />
      </NavLink>
      <NavLink className="a" to="/category/mas_vendidos">
        Mas Vendidos
      </NavLink>
      <NavLink className="a" to="/category/nuevos">
        Nuevos
      </NavLink>
      <NavLink className="a" to="/category/usados">
        Usados
      </NavLink>
      <CarWidget />
    </nav>
  );
};
export default Navbar;

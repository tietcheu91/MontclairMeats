import { NavLink } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../images/logoMM.jpg';



function Navbar() {

  return (
    <nav className="navbar-container">
      {/* <div className="navbar-logo">
        <NavLink to="/" className="navbar-logo-link">
          <img src={logo} className="logo_style" alt="Logo" />
        </NavLink>
      </div> */}
      <ul className="navbar-links">
      <li >
      <NavLink to="/" className="navbar-logo-link">
          <img src={logo} className="logo_style" alt="Logo" />
        </NavLink>
        </li>
        <li>
          <NavLink exact to="/" className="navbar-link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" className="navbar-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contactus" className="navbar-link" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

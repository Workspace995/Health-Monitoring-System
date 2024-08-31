import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from '../assets/fruits.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Link to="/">HealthSync</Link>
        </div> */}
        <div className="navbar-menu">
          <button>
          <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

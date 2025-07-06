import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Arap's Escrow" height="40" />
          <span>Arap's Escrow</span>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/dashboard" className="nav-item">Dashboard</Link>
          <Link to="/transactions" className="nav-item">Transactions</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
        
        <div className="nav-auth">
          <Link to="/login" className="nav-login">Login</Link>
          <Link to="/register" className="nav-register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

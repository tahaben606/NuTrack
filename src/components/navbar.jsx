import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    
                </ul>
                <div className="nav-icons">
                    <Link to="/login"><i className="fas fa-user"></i>
                   <button className="contact-btn">LOGIN</button> </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

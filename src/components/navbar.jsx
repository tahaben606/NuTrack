import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <ul className="nav-links">
                    <li><a to="/">Home</a></li>
                    <li><a to="/about">About Us</a></li>
                    <li><a to="/contact">Contact Us</a></li>
                </ul>
                <div className="nav-icons">
                   <button className="contact-btn">CONTACT US</button> 
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;

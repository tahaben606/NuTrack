import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isNotHomePage = location.pathname !== '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <div className="logo">
                    {/* logo hna */}
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipe">Recipe</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="nav-icons">
                    <Link to="/login">
                        <i className="fas fa-user"></i>
                        <button className="contact-btn">LOGIN</button>
                    </Link>
                    <Link to="/signup">
                        <button className="contact-btn">SIGNUP</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

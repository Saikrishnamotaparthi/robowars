import React, { useState, useEffect } from 'react';
import './Navbar.css';
import pramanaLogo from '../assets/pramana-logo.png';
import gelectraLogo from '../assets/gelectra-logo-new.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="hud-line top"></div>
            <div className="container nav-content">
                <div className="nav-logos">
                    <img src={pramanaLogo} alt="Pramana" className="nav-logo-img" />
                    <span className="nav-divider">|</span>
                    <img src={gelectraLogo} alt="G-Electra" className="nav-logo-img" />
                </div>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-links">
                    <li><a href="#hero" data-text="HOME">HOME</a></li>
                    <li><a href="#about" data-text="ABOUT">ABOUT</a></li>
                    <li><a href="#categories" data-text="CATEGORIES">CATEGORIES</a></li>
                    <li><a href="#prize" data-text="PRIZE">PRIZE</a></li>
                    <li><a href="#contact" data-text="CONTACT">CONTACT</a></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="menu-hud-grid"></div>
                    <div className="menu-header">SYSTEM NAVIGATION</div>
                    <ul className="mobile-nav-links">
                        <li><a href="#hero" onClick={closeMenu}>HOME</a></li>
                        <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
                        <li><a href="#categories" onClick={closeMenu}>CATEGORIES</a></li>
                        <li><a href="#prize" onClick={closeMenu}>PRIZE</a></li>
                        <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
                    </ul>
                    <div className="menu-footer">STATUS: ONLINE</div>
                </div>
            </div>
            <div className="hud-line bottom"></div>
        </nav>
    );
};

export default Navbar;

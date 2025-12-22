import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <img 
            src={logo} 
            alt="Níbbo Logo" 
            className="navbar-logo-img"
          />
        </div>
        
        <div className={`navbar-actions ${isMenuOpen ? 'is-open' : ''}`}>
            <div className="navbar-actions-wrapper">
              <a 
                href="https://www.google.com/maps/place/Abeokuta"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-location" 
                title="View on Map"
              >
               <MapPin size={18} className="navbar-location-icon" />
               <span>Abeokuta</span>
              </a>
            </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
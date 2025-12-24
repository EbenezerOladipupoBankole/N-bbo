import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.webp';
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
      <style>{`
        @media (max-width: 768px) {
          .navbar-actions {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 2rem 0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 50;
          }
          .navbar-actions.is-open {
            display: flex !important;
            justify-content: center;
          }
        }
      `}</style>
      <div className="navbar-content">
        <div className="navbar-logo" style={{ background: 'transparent' }}>
          <img 
            src={logo} 
            alt="Níbbo Logo" 
            className="navbar-logo-img"
            style={{ height: '200px', width: 'auto', mixBlendMode: 'multiply' }}
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
                style={{ fontSize: '1.2rem' }}
              >
               <MapPin size={28} className="navbar-location-icon" />
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
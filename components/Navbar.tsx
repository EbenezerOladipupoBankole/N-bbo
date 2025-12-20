import React from 'react';
import { MapPin } from 'lucide-react';

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-logo">
          <div className="navbar-logo-icon-wrapper">
             <MapPin className="navbar-logo-icon" fill="currentColor" stroke="white" strokeWidth={1.5} />
          </div>
          <span className="navbar-logo-text">
            NÍBBO
          </span>
        </div>
        
        <div className="navbar-actions">
            <div style={{ position: 'relative' }}>
              <a 
                href="https://www.google.com/maps/place/Abeokuta"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-location" 
                style={{ textDecoration: 'none' }}
                title="View on Map"
              >
               <MapPin size={18} style={{ color: 'var(--nibbo-orange)' }} />
               <span>Abeokuta</span>
              </a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
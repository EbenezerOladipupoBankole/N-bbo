import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Video } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
             <div className="navbar-logo">
                <div className="navbar-logo-icon-wrapper">
                  <MapPin className="text-nibbo-orange" size={20} />
                </div>
                <span className="navbar-logo-text">NÍBBO</span>
             </div>
             <p className="footer-desc">
               Your trusted partner for errands, logistics, and shopping in Abeokuta. Fast, reliable, and secure.
             </p>
             <div className="footer-socials">
               <a href="https://www.instagram.com/segunol3?igsh=NzFjYWRicnBmZ3M=" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                 <Instagram size={20} />
               </a>
               <a href="https://www.tiktok.com/@user1108361723041?_r=1&_t=ZS-92QAOwIOs4O" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="TikTok">
                 <Video size={20} />
               </a>
               <a href="#" className="footer-social-link" aria-label="Facebook">
                 <Facebook size={20} />
               </a>
             </div>
          </div>


          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <Mail size={18} className="icon" />
                <a href="mailto:hello@nibbo.africa">nibbodeliv@gmail.com</a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={18} className="icon" />
                <span>Abeokuta, Ogun State</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Níbbo Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
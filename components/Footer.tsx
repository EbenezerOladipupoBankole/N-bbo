import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
             <div className="navbar-logo">
                <div className="navbar-logo-icon-wrapper" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <MapPin className="text-nibbo-orange" size={20} />
                </div>
                <span className="navbar-logo-text" style={{ color: 'white' }}>NÍBBO</span>
             </div>
             <p className="footer-desc">
               Your trusted partner for errands, logistics, and shopping in Abeokuta. Fast, reliable, and secure.
             </p>
             <div className="footer-socials">
               <a href="#" className="footer-social-link" aria-label="Instagram">
                 <Instagram size={20} />
               </a>
               <a href="#" className="footer-social-link" aria-label="Twitter">
                 <Twitter size={20} />
               </a>
               <a href="#" className="footer-social-link" aria-label="Facebook">
                 <Facebook size={20} />
               </a>
             </div>
          </div>

          {/* Links Columns */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#role-selection">Join Waitlist</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Dispute Resolution</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <Mail size={18} style={{ color: 'var(--nibbo-orange)' }} />
                <a href="mailto:hello@nibbo.africa">hello@nibbo.africa</a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={18} style={{ color: 'var(--nibbo-orange)' }} />
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
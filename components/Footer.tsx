import React from 'react';
import { Instagram, Facebook, Video } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-minimal">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">&copy; {new Date().getFullYear()} Níbbo Logistics. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/segunol3?igsh=NzFjYWRicnBmZ3M=" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@user1108361723041?_r=1&_t=ZS-92QAOwIOs4O" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Video size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
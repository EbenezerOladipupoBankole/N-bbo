import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-minimal">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">&copy; {new Date().getFullYear()} Níbbo Logistics. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/nibbodeliv?igsh=eHRtbW83YW83ZjFx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@user1108361723041?_r=1&_t=ZS-92QAOwIOs4O" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                stroke="none"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.116-.198.058-.371-.029-.544-.087-.174-.787-1.898-1.078-2.601-.283-.68-.57-.587-.787-.598-.205-.011-.44-.011-.675-.011-.235 0-.617.088-.94.441-.323.353-1.235 1.207-1.235 2.944 0 1.737 1.264 3.416 1.44 3.652.176.236 2.488 3.799 6.028 5.327 2.362 1.019 2.843.816 3.368.766.525-.05 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
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
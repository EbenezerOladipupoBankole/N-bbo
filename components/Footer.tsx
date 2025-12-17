import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nibbo-green text-white py-12 border-t border-green-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
           <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/10">
                <MapPin className="text-nibbo-orange w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">NÍBBO</span>
           </div>
           
           <div className="flex gap-5">
             <a href="#" className="text-green-100 hover:text-nibbo-orange transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="Instagram">
               <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="text-green-100 hover:text-nibbo-orange transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="Twitter">
               <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="text-green-100 hover:text-nibbo-orange transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="Facebook">
               <Facebook className="w-5 h-5" />
             </a>
             <a href="mailto:hello@nibbo.africa" className="text-green-100 hover:text-nibbo-orange transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10" aria-label="Email">
               <Mail className="w-5 h-5" />
             </a>
           </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 border-t border-white/10 pt-8 text-green-100/80">
          <p>&copy; {new Date().getFullYear()} Níbbo Logistics. Abeokuta, Nigeria.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
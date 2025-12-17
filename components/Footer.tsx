import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-gray-800 pb-12">
           <div>
             <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-nibbo-orange w-6 h-6" />
                <span className="text-2xl font-bold tracking-tight">NÍBBO</span>
             </div>
             <p className="text-gray-400 max-w-sm">
               Connecting Africa through seamless logistics and everyday errands. 
               Reliable, fast, and human-centric.
             </p>
           </div>
           
           <div className="flex gap-6">
             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-nibbo-green transition-colors" aria-label="Instagram">
               <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-nibbo-green transition-colors" aria-label="Twitter">
               <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-nibbo-green transition-colors" aria-label="Facebook">
               <Facebook className="w-5 h-5" />
             </a>
             <a href="mailto:hello@nibbo.africa" className="p-2 bg-gray-800 rounded-full hover:bg-nibbo-green transition-colors" aria-label="Email">
               <Mail className="w-5 h-5" />
             </a>
           </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Níbbo Logistics. All rights reserved.</p>
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
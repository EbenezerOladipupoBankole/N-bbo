import React from 'react';
import { MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo representation based on description */}
          <div className="relative flex items-center justify-center">
             <MapPin className="text-nibbo-orange w-8 h-8 md:w-9 md:h-9" fill="currentColor" stroke="white" strokeWidth={1.5} />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-nibbo-green">
            NÍBBO
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
            <a href="#role-selection" className="bg-nibbo-green text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-800 transition-colors shadow-lg shadow-green-900/20">
              Join Waitlist
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
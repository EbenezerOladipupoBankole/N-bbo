import React from 'react';
import { ArrowRight, ShoppingBag, Truck, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-nibbo-lemon/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-nibbo-orange/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nibbo-light border border-nibbo-green/20 text-nibbo-green text-sm font-semibold mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-nibbo-orange animate-pulse"></span>
              Launching Soon in Abeokuta
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-nibbo-green leading-[1.1] mb-6">
              Errands & Logistics, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nibbo-orange to-amber-500">
                Simplified.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From everyday errands and tech shopping to last-mile deliveries. 
              Níbbo is the fast, reliable link connecting you to what matters.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-nibbo-green text-white rounded-full font-bold text-lg hover:bg-green-800 transition-all transform hover:scale-105 shadow-xl shadow-green-900/20 flex items-center justify-center gap-2 group"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-bold text-lg hover:border-nibbo-green hover:text-nibbo-green transition-colors"
              >
                Choose Your Role
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-nibbo-orange" />
                    <span className="text-sm font-medium">Shopping</span>
                </div>
                <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-nibbo-orange" />
                    <span className="text-sm font-medium">Logistics</span>
                </div>
                <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-nibbo-orange" />
                    <span className="text-sm font-medium">Errands</span>
                </div>
            </div>
          </div>

          {/* Abstract Visual / Image Placeholder */}
          <div className="flex-1 w-full max-w-md lg:max-w-full relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
               <img 
                 src="https://images.unsplash.com/photo-1616401784845-180886ba9ca2?auto=format&fit=crop&q=80&w=800" 
                 alt="African Logistics Abstract" 
                 className="w-full h-full object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-nibbo-green/80 to-transparent mix-blend-multiply"></div>
               <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/10 inline-block">
                    <p className="font-bold text-xl">Fast & Reliable</p>
                    <p className="text-white/80 text-sm">Connecting you instantly</p>
                  </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-nibbo-lemon rounded-full flex items-center justify-center shadow-lg animate-bounce duration-[3000ms]">
                <span className="text-nibbo-green font-bold text-xs text-center px-2">Coming Soon</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
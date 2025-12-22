import React from 'react';
import { ArrowRight, ShoppingBag, Truck, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-layout">
          
          {/* Text Content */}
          <div className="hero-text-content">
            <div className="hero-badge">
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--nibbo-orange)' }}></span>
              Launching Soon in Abeokuta
            </div>
            
            <h1 className="hero-title">
              Errands & Logistics, <br/>
              <span>
                Simplified.
              </span>
            </h1>
            
            <p className="hero-desc">
              From everyday errands and tech shopping to last-mile deliveries. 
              Níbbo is the fast, reliable link connecting you to what matters.
            </p>
            
            <div className="hero-actions">
              <button 
                onClick={onCtaClick}
                className="btn btn-primary"
              >
                Join the Waitlist
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="hero-features">
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
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
               <img 
                 src="../assets/images/hero.png" 
                 alt="Fast Delivery Service" 
                 className="hero-image"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
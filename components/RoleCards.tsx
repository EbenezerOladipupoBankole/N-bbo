import React from 'react';
import { User, Bike, Store } from 'lucide-react';
import { RoleType } from '../types';
import './RoleCards.css';

// Import your local image here (adjust filename as needed)
import customerImage from '../assets/images/customers.webp';
import riderImage from '../assets/images/riders.webp';
import vendorImage from '../assets/images/vendor.webp';

interface RoleCardsProps {
  selectedRole: RoleType;
  onSelect: (role: RoleType) => void;
}

const roles = [
  {
    id: 'customer' as RoleType,
    title: 'Customer',
    desc: 'Send packages, book personal shoppers, or order food and tech in Abeokuta. Fast, reliable errands and logistics at your fingertips.',
    icon: <User className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600',
    imageUrl: customerImage
  },
  {
    id: 'rider' as RoleType,
    title: 'Rider',
    desc: 'Turn your bike, car, or vehicle into an income source. Join the Níbbo fleet in Abeokuta and earn money delivering packages and errands.',
    icon: <Bike className="w-6 h-6" />,
    color: 'bg-orange-100 text-nibbo-orange',
    imageUrl: riderImage
  },
  {
    id: 'vendor' as RoleType,
    title: 'Vendor',
    desc: 'Expand your business reach. Sell food, groceries, or products to thousands of customers across Abeokuta with our seamless logistics network.',
    icon: <Store className="w-6 h-6" />,
    color: 'bg-green-100 text-green-700',
    imageUrl: vendorImage
  },
];

const RoleCards: React.FC<RoleCardsProps> = ({ selectedRole, onSelect }) => {
  return (
    <div className="role-selection-container" style={{ 
      background: 'linear-gradient(to bottom, #fff7ed, #ffffff)',
      paddingTop: '120px', // Increased padding to better clear the taller navbar
      minHeight: '100vh',
      overflowX: 'hidden', // Prevents horizontal scrolling
      boxSizing: 'border-box' // Ensures padding is included in minHeight calculation
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem auto', padding: '0 1rem' }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          fontWeight: 800, 
          color: '#111827', 
          marginBottom: '1rem', 
          lineHeight: 1.2 
        }}>
          Logistics, Shopping & <span style={{ color: '#ea580c' }}>Errands.</span>
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: 1.6, 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          The ultimate super app for Abeokuta. Whether you need swift package delivery, want to earn as a rider, or grow your business as a vendor, Níbbo connects you to what matters.
        </p>
      </div>

      <div className="role-grid">
      {roles.map((role) => {
        const isSelected = selectedRole === role.id;
        
        return (
          <button
            key={role.id}
            type="button"
            onClick={() => onSelect(role.id)}
            className={`role-card ${isSelected ? 'selected' : ''}`}
          >
            {/* Image Section */}
            <div className="role-card-img-container">
              <img 
                src={role.imageUrl} 
                alt={role.title} 
                className="role-card-img"
                loading="lazy"
                decoding="async"
              />
              
              {/* Icon floating on image */}
              <div className="role-card-icon-wrapper">
                {role.icon}
              </div>

            </div>
            
            {/* Content Section */}
            <div className="role-card-content">
              <h3 className="role-card-title" style={{ fontFamily: 'sans-serif' }}>{role.title}</h3>
              <p className="role-card-desc" style={{ fontFamily: 'sans-serif' }}>{role.desc}</p>
            </div>
          </button>
        );
      })}
      </div>
    </div>
  );
};

export default RoleCards;
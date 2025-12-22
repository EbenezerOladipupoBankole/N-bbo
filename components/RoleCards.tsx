import React from 'react';
import { User, Bike, Store } from 'lucide-react';
import { RoleType } from '../types';
import './RoleCards.css';

// Import your local image here (adjust filename as needed)
import customerImage from '../assets/images/customers.png';
import riderImage from '../assets/images/riders.png';
import vendorImage from '../assets/images/vendor.png';

interface RoleCardsProps {
  selectedRole: RoleType;
  onSelect: (role: RoleType) => void;
}

const roles = [
  {
    id: 'customer' as RoleType,
    title: 'Customer',
    desc: 'I want to send packages, run errands, or buy tech.',
    icon: <User className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600',
    imageUrl: customerImage
  },
  {
    id: 'rider' as RoleType,
    title: 'Rider',
    desc: 'I own a bike or vehicle and want to earn money.',
    icon: <Bike className="w-6 h-6" />,
    color: 'bg-orange-100 text-nibbo-orange',
    imageUrl: riderImage
  },
  {
    id: 'vendor' as RoleType,
    title: 'Vendor',
    desc: 'I want to sell products or food on the platform.',
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
      overflowX: 'hidden' // Prevents horizontal scrolling
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
          The super app for everyone. Send packages, earn money, or sell products.
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
              />
              
              {/* Icon floating on image */}
              <div className="role-card-icon-wrapper">
                {role.icon}
              </div>

            </div>
            
            {/* Content Section */}
            <div className="role-card-content">
              <h3 className="role-card-title">{role.title}</h3>
              <p className="role-card-desc">{role.desc}</p>
            </div>
          </button>
        );
      })}
      </div>

      <button 
        className="get-started-btn"
        disabled={!selectedRole}
      >
        Get Started
      </button>
    </div>
  );
};

export default RoleCards;
import React from 'react';
import { User, Bike, Store } from 'lucide-react';
import { RoleType } from '../types';

// Import your local image here (adjust filename as needed)
import customerImage from '../assets/customer.jpg';

interface RoleCardsProps {
  selectedRole: RoleType;
  onSelect: (role: RoleType) => void;
}

const RoleCards: React.FC<RoleCardsProps> = ({ selectedRole, onSelect }) => {
  const roles: { 
    id: RoleType; 
    title: string; 
    desc: string; 
    icon: React.ReactNode; 
    color: string;
    imageUrl: string;
  }[] = [
    {
      id: 'customer',
      title: 'Customer',
      desc: 'I want to send packages, run errands, or buy tech.',
      icon: <User className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600',
      imageUrl: customerImage // Use the imported variable here
    },
    {
      id: 'rider',
      title: 'Rider',
      desc: 'I own a bike or vehicle and want to earn money.',
      icon: <Bike className="w-6 h-6" />,
      color: 'bg-orange-100 text-nibbo-orange',
      imageUrl: 'https://images.unsplash.com/photo-1613685862207-696323565551?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      id: 'vendor',
      title: 'Vendor',
      desc: 'I want to sell products or food on the platform.',
      icon: <Store className="w-6 h-6" />,
      color: 'bg-green-100 text-green-700',
      imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600&h=400'
    },
  ];

  return (
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
              <div className="role-card-icon-wrapper" style={{ backgroundColor: 'white' }}>
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
  );
};

export default RoleCards;
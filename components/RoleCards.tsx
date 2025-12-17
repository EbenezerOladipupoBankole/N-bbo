import React from 'react';
import { User, Bike, Store } from 'lucide-react';
import { RoleType } from '../types';

interface RoleCardsProps {
  selectedRole: RoleType;
  onSelect: (role: RoleType) => void;
}

const RoleCards: React.FC<RoleCardsProps> = ({ selectedRole, onSelect }) => {
  const roles: { id: RoleType; title: string; desc: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'customer',
      title: 'Customer',
      desc: 'I want to send packages, run errands, or buy tech.',
      icon: <User className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'rider',
      title: 'Rider',
      desc: 'I own a bike or vehicle and want to earn money.',
      icon: <Bike className="w-8 h-8" />,
      color: 'bg-nibbo-orange/10 text-nibbo-orange',
    },
    {
      id: 'vendor',
      title: 'Vendor',
      desc: 'I want to sell products or food on the platform.',
      icon: <Store className="w-8 h-8" />,
      color: 'bg-nibbo-lemon/20 text-green-700', // Adjusted specifically for visual clarity
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {roles.map((role) => {
        const isSelected = selectedRole === role.id;
        
        return (
          <button
            key={role.id}
            onClick={() => onSelect(role.id)}
            className={`
              relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 border-2
              ${isSelected 
                ? 'border-nibbo-green bg-white shadow-xl scale-[1.02] ring-4 ring-green-50' 
                : 'border-transparent bg-white shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-gray-100'
              }
            `}
          >
            {isSelected && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-nibbo-green rounded-full flex items-center justify-center">
                 <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
            )}
            
            <div className={`mb-6 p-4 rounded-2xl ${role.color} transition-colors`}>
              {role.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{role.desc}</p>
          </button>
        );
      })}
    </div>
  );
};

export default RoleCards;
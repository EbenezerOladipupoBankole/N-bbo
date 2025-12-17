import React from 'react';
import { User, Bike, Store } from 'lucide-react';
import { RoleType } from '../types';

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
      imageUrl: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      id: 'rider',
      title: 'Rider',
      desc: 'I own a bike or vehicle and want to earn money.',
      icon: <Bike className="w-6 h-6" />,
      color: 'bg-orange-100 text-nibbo-orange',
      imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      id: 'vendor',
      title: 'Vendor',
      desc: 'I want to sell products or food on the platform.',
      icon: <Store className="w-6 h-6" />,
      color: 'bg-green-100 text-green-700',
      imageUrl: 'https://images.unsplash.com/photo-1472851294608-4155f2118c03?auto=format&fit=crop&q=80&w=600&h=400'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {roles.map((role) => {
        const isSelected = selectedRole === role.id;
        
        return (
          <button
            key={role.id}
            onClick={() => onSelect(role.id)}
            className={`
              group relative flex flex-col items-start text-left rounded-3xl transition-all duration-300 overflow-hidden border-2
              ${isSelected 
                ? 'border-nibbo-green bg-white shadow-2xl ring-4 ring-green-50 translate-y-[-8px]' 
                : 'border-transparent bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-gray-100'
              }
            `}
          >
            {/* Image Section */}
            <div className="w-full h-48 overflow-hidden relative">
              <img 
                src={role.imageUrl} 
                alt={role.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Icon floating on image */}
              <div className={`absolute bottom-4 left-4 p-3 rounded-xl ${role.color} shadow-lg`}>
                {role.icon}
              </div>

              {isSelected && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-nibbo-green rounded-full flex items-center justify-center shadow-md animate-in fade-in zoom-in duration-200">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{role.desc}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default RoleCards;
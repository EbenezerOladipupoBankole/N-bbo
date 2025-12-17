import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleCards from './components/RoleCards';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import { RoleType } from './types';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(role);
    // Smooth scroll to form section after a short delay to allow UI to update
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => {
           const roleSection = document.getElementById('role-selection');
           roleSection?.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <div id="role-selection" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nibbo-green mb-4">
                Choose Your Path
              </h2>
              <p className="text-gray-600 text-lg">
                Whether you want to send, earn, or sell, Níbbo has a place for you. Select your role to get started.
              </p>
            </div>
            
            <RoleCards selectedRole={selectedRole} onSelect={handleRoleSelect} />
          </div>
        </div>

        <div ref={formRef}>
          {selectedRole && (
            <FormSection role={selectedRole} />
          )}
        </div>
      </main>

      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default App;
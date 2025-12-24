import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleCards from './components/RoleCards';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import { RoleType } from './types';
import { Toaster } from 'react-hot-toast';
import { X, ArrowLeft } from 'lucide-react';

// Lazy load the form component to reduce initial bundle size
const FormSection = React.lazy(() => import('./components/FormSection'));

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>(null);

  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(role);
  };

  const closeModal = () => setSelectedRole(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedRole) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedRole]);

  return (
    <div className="app-container" style={{ overflowX: 'hidden', width: '100%' }}>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <CountdownTimer />
      <Navbar />
      
      <main className="app-main">
        <Hero onCtaClick={() => {
           const roleSection = document.getElementById('role-selection');
           roleSection?.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <div id="role-selection" className="role-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Choose Your Path
              </h2>
              <p className="section-desc">
                Whether you want to send, earn, or sell, Níbbo has a place for you. Select your role to get started.
              </p>
            </div>
            
            <RoleCards selectedRole={selectedRole} onSelect={handleRoleSelect} />
          </div>
        </div>

        {/* Modal Overlay */}
        {selectedRole && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
              <button className="modal-back-btn" onClick={closeModal}>
                <ArrowLeft size={24} color="#374151" />
              </button>
              <button className="modal-close-btn" onClick={closeModal}>
                <X size={24} color="#374151" />
              </button>
              <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
                <FormSection role={selectedRole} />
              </Suspense>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default App;
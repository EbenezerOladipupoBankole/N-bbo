import React, { useState } from 'react';
import { RoleType, CustomerFormData, RiderFormData, VendorFormData, SERVICES_LIST, VEHICLE_TYPES, VENDOR_CATEGORIES, ABEOKUTA_LOCATIONS } from '../types';
import { Loader2, CheckCircle2, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface FormSectionProps {
  role: RoleType;
}

// Local Input component using standard CSS
const Input = ({ label, optional, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; optional?: boolean }) => (
  <div className="form-group">
    <label className="form-label">
      {label} {optional && <span style={{ color: '#9ca3af', fontWeight: 'normal', fontSize: '0.8em' }}>(Optional)</span>}
    </label>
    <input className={`form-input ${className || ''}`} {...props} />
  </div>
);

const FormSection: React.FC<FormSectionProps> = ({ role }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // State holders for different forms
  const [customerData, setCustomerData] = useState<CustomerFormData>({
    fullName: '', email: '', phone: '', city: '', services: []
  });
  const [riderData, setRiderData] = useState<RiderFormData>({
    fullName: '', phone: '', email: '', city: '', vehicleType: '', availability: ''
  });
  const [vendorData, setVendorData] = useState<VendorFormData>({
    businessName: '', contactName: '', phone: '', email: '', city: '', category: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    const currentPhone = role === 'customer' ? customerData.phone : role === 'rider' ? riderData.phone : vendorData.phone;
    const cleanPhone = currentPhone.replace(/[\s-()]/g, '');
    
    if (!/^\+?\d{10,15}$/.test(cleanPhone)) {
      toast.error("Please enter a valid phone number (e.g. 080... or +234...)");
      return;
    }

    setIsSubmitting(true);

    // Prepare data based on selected role
    let formData = { role };
    if (role === 'customer') formData = { ...formData, ...customerData };
    if (role === 'rider') formData = { ...formData, ...riderData };
    if (role === 'vendor') formData = { ...formData, ...vendorData };
    
    try {
      // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree Form ID
      const response = await fetch("https://formspree.io/f/xeejqqne", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Welcome to Níbbo! We'll be in touch.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (service: string) => {
    setCustomerData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists 
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const renderCitySelect = (
    value: string, 
    onChange: (val: string) => void,
    label: string = "Location in Abeokuta"
  ) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <select 
        className="form-select"
        required
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Select your area...</option>
        {ABEOKUTA_LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
      </select>
    </div>
  );

  const whatsappLinks = {
    customer: "https://chat.whatsapp.com/JSIL98Y397gLxGaybkovGG",
    rider: "https://chat.whatsapp.com/ExYRvxpBL4v4J2KsDjsyFR",
    vendor: "https://chat.whatsapp.com/Dj9CNLO16IjENg0vSEVwoT"
  };

  if (isSuccess) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="success-title">You're on the list!</h3>
          <p className="success-desc">
            Thank you for joining Níbbo. We have received your details.
          </p>
          <div className="success-info-box">
              <p className="success-info-text">
                 Look out for a WhatsApp message from us soon to confirm your spot!
              </p>
          </div>

          <a 
            href={whatsappLinks[role]}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '12px',
              backgroundColor: '#25D366',
              color: 'white',
              borderRadius: '8px',
              fontWeight: 600,
              marginBottom: '12px',
              textDecoration: 'none',
              marginTop: '16px'
            }}
          >
            <MessageCircle size={20} />
            Join {role.charAt(0).toUpperCase() + role.slice(1)} WhatsApp Channel
          </a>

          <div>
            <button 
              onClick={() => setIsSuccess(false)}
              className="success-reset-btn"
            >
              Register another user
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="form-section">
      <div className="container form-container">
        <div className="form-header">
            <h2 className="section-title">
              Join as a {role}
            </h2>
            <p className="section-desc">
              Fill out the form below. It takes less than a minute.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          
          {/* CUSTOMER FORM */}
          {role === 'customer' && (
            <>
              <div className="form-grid form-grid-2">
                <Input 
                  label="Full Name" 
                  placeholder="e.g. Femi Adebayo"
                  required 
                  value={customerData.fullName}
                  onChange={e => setCustomerData({...customerData, fullName: e.target.value})}
                />
                {renderCitySelect(customerData.city, (val) => setCustomerData({...customerData, city: val}))}
              </div>
              
              <Input 
                label="WhatsApp Number" 
                type="tel" 
                placeholder="+234..." 
                required 
                value={customerData.phone}
                onChange={e => setCustomerData({...customerData, phone: e.target.value})}
              />
              
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="name@example.com" 
                optional 
                value={customerData.email}
                onChange={e => setCustomerData({...customerData, email: e.target.value})}
              />

              <div className="pt-2">
                <label className="form-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                  What services are you interested in?
                </label>
                <div className="form-grid form-grid-2">
                  {SERVICES_LIST.map(service => (
                    <label key={service} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        style={{ width: '1.25rem', height: '1.25rem' }}
                        checked={customerData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* RIDER FORM */}
          {role === 'rider' && (
            <>
              <div className="form-grid form-grid-2">
                <Input 
                  label="Full Name" 
                  placeholder="e.g. Musa Ibrahim"
                  required 
                  value={riderData.fullName}
                  onChange={e => setRiderData({...riderData, fullName: e.target.value})}
                />
                {renderCitySelect(riderData.city, (val) => setRiderData({...riderData, city: val}))}
              </div>

              <Input 
                label="WhatsApp Number" 
                type="tel" 
                placeholder="+234..." 
                required 
                value={riderData.phone}
                onChange={e => setRiderData({...riderData, phone: e.target.value})}
              />
              
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="name@example.com" 
                optional 
                value={riderData.email}
                onChange={e => setRiderData({...riderData, email: e.target.value})}
              />

              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">Vehicle Type</label>
                  <select 
                    className="form-select"
                    required
                    value={riderData.vehicleType}
                    onChange={e => setRiderData({...riderData, vehicleType: e.target.value})}
                  >
                    <option value="">Select vehicle...</option>
                    {VEHICLE_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Availability</label>
                  <select 
                    className="form-select"
                    required
                    value={riderData.availability}
                    onChange={e => setRiderData({...riderData, availability: e.target.value})}
                  >
                    <option value="">Select availability...</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Weekends Only">Weekends Only</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* VENDOR FORM */}
          {role === 'vendor' && (
            <>
              <div className="form-grid form-grid-2">
                <Input 
                  label="Business Name" 
                  placeholder="e.g. Mama T's Kitchen"
                  required 
                  value={vendorData.businessName}
                  onChange={e => setVendorData({...vendorData, businessName: e.target.value})}
                />
                <Input 
                  label="Contact Person Name" 
                  placeholder="e.g. Tolu Johnson"
                  required 
                  value={vendorData.contactName}
                  onChange={e => setVendorData({...vendorData, contactName: e.target.value})}
                />
              </div>

              <Input 
                label="WhatsApp Number" 
                type="tel" 
                placeholder="+234..." 
                required 
                value={vendorData.phone}
                onChange={e => setVendorData({...vendorData, phone: e.target.value})}
              />

               <div className="form-grid form-grid-2">
                <Input 
                    label="Email Address" 
                    type="email" 
                    placeholder="business@example.com" 
                    optional 
                    value={vendorData.email}
                    onChange={e => setVendorData({...vendorData, email: e.target.value})}
                />
                 {renderCitySelect(vendorData.city, (val) => setVendorData({...vendorData, city: val}))}
               </div>

              <div className="form-group">
                  <label className="form-label">Business Category</label>
                  <select 
                    className="form-select"
                    required
                    value={vendorData.category}
                    onChange={e => setVendorData({...vendorData, category: e.target.value})}
                  >
                    <option value="">Select category...</option>
                    {VENDOR_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
              </div>
            </>
          )}

          {/* SUBMIT BUTTON */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary" style={{ width: '100%' }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="spin" size={20} />
                  Processing...
                </>
              ) : (
                `Join Waitlist as ${role === 'customer' ? 'Customer' : role === 'rider' ? 'Rider' : 'Vendor'}`
              )}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af', marginTop: '1rem' }}>
                By joining, you agree to receive WhatsApp communications from Níbbo. 
                <br/>Your data is secure and will never be shared.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
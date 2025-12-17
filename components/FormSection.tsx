import React, { useState } from 'react';
import { RoleType, CustomerFormData, RiderFormData, VendorFormData, SERVICES_LIST, VEHICLE_TYPES, VENDOR_CATEGORIES, ABEOKUTA_LOCATIONS } from '../types';
import Input from './ui/Input';
import { Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface FormSectionProps {
  role: RoleType;
}

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
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Welcome to Níbbo! We'll be in touch.");
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
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <select 
        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-nibbo-green/20 focus:border-nibbo-green"
        required
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Select your area...</option>
        {ABEOKUTA_LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
      </select>
    </div>
  );

  if (isSuccess) {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-green-50 border border-green-100 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">You're on the list!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for joining Níbbo. We have received your details.
            </p>
            <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm inline-block">
                <p className="text-green-800 font-medium text-sm">
                   Look out for a WhatsApp message from us soon to confirm your spot!
                </p>
            </div>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-gray-500 hover:text-nibbo-green text-sm font-medium underline"
            >
              Register another user
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
              Join as a {role}
            </h2>
            <p className="text-gray-500">
              Fill out the form below. It takes less than a minute.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* CUSTOMER FORM */}
          {role === 'customer' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label className="text-sm font-semibold text-gray-700 block mb-3">
                  What services are you interested in?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_LIST.map(service => (
                    <label key={service} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 text-nibbo-green rounded border-gray-300 focus:ring-nibbo-green"
                        checked={customerData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* RIDER FORM */}
          {role === 'rider' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Vehicle Type</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-nibbo-green/20 focus:border-nibbo-green"
                    required
                    value={riderData.vehicleType}
                    onChange={e => setRiderData({...riderData, vehicleType: e.target.value})}
                  >
                    <option value="">Select vehicle...</option>
                    {VEHICLE_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Availability</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-nibbo-green/20 focus:border-nibbo-green"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Business Category</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-nibbo-green/20 focus:border-nibbo-green"
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
              className="w-full bg-nibbo-green text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-green-900/10 hover:bg-green-800 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                `Join Waitlist as ${role === 'customer' ? 'Customer' : role === 'rider' ? 'Rider' : 'Vendor'}`
              )}
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
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
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  optional?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, optional, className, ...props }) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-semibold text-gray-700">
        {label} {optional && <span className="text-gray-400 font-normal text-xs">(Optional)</span>}
      </label>
      <input
        className={`
          w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-900 placeholder-gray-400 transition-all
          focus:outline-none focus:ring-2 focus:ring-nibbo-green/20 focus:border-nibbo-green
          ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
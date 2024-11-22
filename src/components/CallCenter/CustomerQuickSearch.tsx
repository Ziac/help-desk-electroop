import React, { useState } from 'react';
import { Search, Phone } from 'lucide-react';

const CustomerQuickSearch = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)} ${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            placeholder="Müşteri telefon numarası girin..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </div>
        <button className="action-button bg-blue-500 hover:bg-blue-600">
          Müşteri Bul
        </button>
      </div>
    </div>
  );
};

export default CustomerQuickSearch;
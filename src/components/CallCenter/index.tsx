import React from 'react';
import CustomerQuickSearch from './CustomerQuickSearch';
import CustomerDetails from './CustomerDetails';
import StationFilter from './StationFilter';
import StationStatus from './StationStatus';
import QuickActions from './QuickActions';

const CallCenter = () => {
  const mockCustomer = {
    name: 'John Smith',
    phone: '(555) 123-4567',
    email: 'john.smith@example.com',
    address: '123 Main St, New York, NY',
    vehicles: [
      {
        make: 'Tesla',
        model: 'Model 3',
        year: '2023',
        socketType: 'Type 2',
        plateNumber: 'ABC123'
      }
    ],
    paymentMethods: [
      {
        cardType: 'Visa',
        lastFour: '4567',
        bank: 'Chase',
        expiryDate: '12/24'
      }
    ]
  };

  return (
    <div className="pt-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="w-full lg:w-2/3">
              <CustomerQuickSearch />
              <CustomerDetails customer={mockCustomer} />
            </div>
            <div className="w-full lg:w-1/3 sticky top-20">
              <QuickActions />
              <div className="mt-4">
                <StationFilter />
                <StationStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenter;
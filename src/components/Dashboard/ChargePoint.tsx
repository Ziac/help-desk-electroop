import React from 'react';

interface ChargePointProps {
  id: string;
  location: string;
  status: 'Active' | 'Inactive' | 'Error' | 'Warning';
  power: string;
  usage: string;
}

const ChargePoint = ({ id, location, status, power, usage }: ChargePointProps) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <span className="font-medium">{id}</span>
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Active' ? 'bg-green-100 text-green-700' :
        status === 'Inactive' ? 'bg-gray-100 text-gray-700' :
        'bg-red-100 text-red-700'
      }`}>
        {status}
      </span>
    </div>
    <p className="text-gray-600 text-sm mb-3">{location}</p>
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{power} kW</span>
      <span className="text-gray-500">{usage}% utilization</span>
    </div>
  </div>
);

export default ChargePoint;
import React from 'react';
import { MapPin, Filter, Search } from 'lucide-react';

const StationFilter = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by station ID or location..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            Location
          </button>
          <button className="px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            Filters
          </button>
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        {['All', 'Available', 'In Use', 'Offline', 'Needs Attention'].map((filter) => (
          <button
            key={filter}
            className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StationFilter;
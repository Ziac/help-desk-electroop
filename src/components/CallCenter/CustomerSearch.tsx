import React, { useState } from 'react';
import { Search, User, Phone, Mail, MapPin, Clock, Battery, Filter } from 'lucide-react';

const CustomerSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'charging', label: 'Charging' },
    { id: 'issues', label: 'With Issues' }
  ];

  const customers = [
    {
      id: 'USR123',
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john.s@example.com',
      location: 'New York, NY',
      status: 'Active',
      lastActivity: '2 mins ago',
      currentSession: {
        chargePoint: 'CP-045',
        duration: '45 min',
        power: '50 kW'
      }
    },
    {
      id: 'USR124',
      name: 'Sarah Johnson',
      phone: '+1 (555) 234-5678',
      email: 'sarah.j@example.com',
      location: 'Boston, MA',
      status: 'Charging',
      lastActivity: 'Now',
      currentSession: {
        chargePoint: 'CP-032',
        duration: '15 min',
        power: '22 kW'
      }
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers... (⌘K)"
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <div className="flex gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-h-[calc(100vh-20rem)] overflow-y-auto scrollbar-hide">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="card p-4 space-y-3 cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <span className="font-medium block">{customer.name}</span>
                  <span className="text-sm text-gray-500">{customer.id}</span>
                </div>
              </div>
              <span className={`status-badge ${
                customer.status === 'Active' 
                  ? 'status-badge-success'
                  : 'status-badge-warning'
              }`}>
                {customer.status}
              </span>
            </div>

            {customer.currentSession && (
              <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-3">
                <Battery className="w-5 h-5 text-blue-600" />
                <div className="text-sm">
                  <p className="text-blue-700 font-medium">
                    {customer.currentSession.chargePoint}
                  </p>
                  <p className="text-blue-600">
                    {customer.currentSession.duration} • {customer.currentSession.power}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${customer.phone}`} className="hover:text-blue-600">
                  {customer.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${customer.email}`} className="hover:text-blue-600">
                  {customer.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{customer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last active: {customer.lastActivity}</span>
              </div>
            </div>

            <div className="pt-3 border-t flex justify-end gap-3">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View History
              </button>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSearch;
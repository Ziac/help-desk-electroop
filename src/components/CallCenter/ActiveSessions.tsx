import React from 'react';
import { Battery, Clock, MapPin, User } from 'lucide-react';

const ActiveSessions = () => {
  const sessions = [
    {
      id: 'S123',
      user: 'John Smith',
      chargePoint: 'CP-045',
      location: 'Central Station',
      startTime: '14:30',
      duration: '45 min',
      power: '50 kW',
      status: 'Charging',
    },
    {
      id: 'S124',
      user: 'Sarah Johnson',
      chargePoint: 'CP-032',
      location: 'Shopping Mall',
      startTime: '14:15',
      duration: '60 min',
      power: '22 kW',
      status: 'Waiting',
    },
  ];

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div key={session.id} className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex-shrink-0">
            <Battery className="w-8 h-8 text-blue-500" />
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">{session.chargePoint}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                session.status === 'Charging' 
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {session.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {session.user}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {session.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Started {session.startTime} ({session.duration})
              </div>
              <div>Power: {session.power}</div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveSessions;
import React from 'react';
import { Phone, Mail, Clock, MapPin, Battery } from 'lucide-react';

interface Session {
  id: string;
  chargePoint: string;
  location: string;
  startTime: string;
  status: string;
}

const UserInfo = () => {
  const mockSessions: Session[] = [
    {
      id: 'S123',
      chargePoint: 'CP-045',
      location: 'Central Station',
      startTime: '2024-03-14 14:30',
      status: 'Active',
    },
    {
      id: 'S122',
      chargePoint: 'CP-032',
      location: 'Shopping Mall',
      startTime: '2024-03-13 09:15',
      status: 'Completed',
    },
  ];

  return (
    <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-96 bg-white border-l overflow-y-auto">
      <div className="p-6 border-b">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">John Smith</h2>
            <p className="text-gray-500">Customer since Jan 2024</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <a href="tel:+15551234567" className="text-blue-600 hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <a href="mailto:john.smith@example.com" className="text-blue-600 hover:underline">
              john.smith@example.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span>New York, NY</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Recent Sessions</h3>
          <button className="text-sm text-blue-600 hover:underline">View all</button>
        </div>

        <div className="space-y-4">
          {mockSessions.map((session) => (
            <div key={session.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Battery className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">{session.chargePoint}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  session.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {session.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{session.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Clock className="w-4 h-4" />
                <span>{session.startTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
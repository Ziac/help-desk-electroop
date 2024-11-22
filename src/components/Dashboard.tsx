import React from 'react';
import { Battery, MapPin, AlertCircle, Activity, TrendingUp } from 'lucide-react';

const StatusCard = ({ icon: Icon, label, value, trend, color }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-green-500 text-sm">
          <TrendingUp className="w-4 h-4" />
          {trend}
        </div>
      )}
    </div>
    <p className="text-gray-600 text-sm">{label}</p>
    <p className="text-2xl font-semibold mt-1">{value}</p>
  </div>
);

const ChargePoint = ({ id, location, status, power, usage }: any) => (
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

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pl-64">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Monitor your charging network performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatusCard
            icon={Battery}
            label="Active Charge Points"
            value="156"
            trend="+12.5%"
            color="bg-green-500"
          />
          <StatusCard
            icon={MapPin}
            label="Total Locations"
            value="24"
            color="bg-blue-500"
          />
          <StatusCard
            icon={AlertCircle}
            label="Active Alerts"
            value="3"
            color="bg-red-500"
          />
          <StatusCard
            icon={Activity}
            label="Current Usage"
            value="78%"
            trend="+5.2%"
            color="bg-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { time: '2 mins ago', event: 'New charging session started at Location #12' },
                  { time: '15 mins ago', event: 'Alert resolved: Charge Point CP-045 back online' },
                  { time: '1 hour ago', event: 'Maintenance completed at Location #08' },
                  { time: '2 hours ago', event: 'Power fluctuation detected at CP-032' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <p className="text-gray-900">{activity.event}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Critical Charge Points</h2>
            <div className="space-y-4">
              <ChargePoint
                id="CP-045"
                location="Central Station, Platform 3"
                status="Error"
                power="50"
                usage="0"
              />
              <ChargePoint
                id="CP-032"
                location="Shopping Mall, Level P1"
                status="Warning"
                power="22"
                usage="45"
              />
              <ChargePoint
                id="CP-078"
                location="Airport Terminal 2"
                status="Active"
                power="150"
                usage="92"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
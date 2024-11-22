import React from 'react';
import { Battery, MapPin, AlertCircle, Activity } from 'lucide-react';
import StatusCard from './StatusCard';
import ChargePoint from './ChargePoint';
import ActivityFeed from './ActivityFeed';

const Dashboard = () => {
  const activities = [
    { time: '2 mins ago', event: 'New charging session started at Location #12' },
    { time: '15 mins ago', event: 'Alert resolved: Charge Point CP-045 back online' },
    { time: '1 hour ago', event: 'Maintenance completed at Location #08' },
    { time: '2 hours ago', event: 'Power fluctuation detected at CP-032' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pl-64 pr-96">
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
            <ActivityFeed activities={activities} />
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
import React from 'react';

interface Activity {
  time: string;
  event: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
    <div className="space-y-4">
      {activities.map((activity, index) => (
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
);

export default ActivityFeed;
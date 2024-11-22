import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';

const AlertsList = () => {
  const alerts = [
    {
      id: 'A1',
      type: 'error',
      message: 'Connection lost with CP-045',
      location: 'Central Station',
      time: '5 min ago',
    },
    {
      id: 'A2',
      type: 'warning',
      message: 'Power fluctuation detected',
      location: 'Shopping Mall CP-032',
      time: '15 min ago',
    },
    {
      id: 'A3',
      type: 'success',
      message: 'CP-078 back online after reset',
      location: 'Airport Terminal',
      time: '1 hour ago',
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
        >
          {getAlertIcon(alert.type)}
          <div className="flex-grow">
            <p className="font-medium mb-1">{alert.message}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{alert.location}</span>
              <span>•</span>
              <span>{alert.time}</span>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Take Action
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlertsList;
import React from 'react';
import { Power, AlertTriangle, RefreshCw, MessageSquare, PhoneCall, HelpCircle } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: <Power className="w-4 h-4" />, label: 'Start', color: 'bg-green-500 hover:bg-green-600' },
    { icon: <RefreshCw className="w-4 h-4" />, label: 'Reset', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: <AlertTriangle className="w-4 h-4" />, label: 'Issue', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { icon: <MessageSquare className="w-4 h-4" />, label: 'SMS', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: <PhoneCall className="w-4 h-4" />, label: 'Call', color: 'bg-red-500 hover:bg-red-600' },
    { icon: <HelpCircle className="w-4 h-4" />, label: 'Help', color: 'bg-gray-500 hover:bg-gray-600' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {actions.map(({ icon, label, color }) => (
          <button
            key={label}
            className={`${color} p-2 rounded-lg text-white flex flex-col items-center gap-1 text-xs w-full`}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
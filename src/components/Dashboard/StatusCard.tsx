import React from 'react';
import { TrendingUp } from 'lucide-react';

interface StatusCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend?: string;
  color: string;
}

const StatusCard = ({ icon: Icon, label, value, trend, color }: StatusCardProps) => (
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

export default StatusCard;
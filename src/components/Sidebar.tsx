import React from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  Battery, 
  Users, 
  AlertCircle, 
  Settings, 
  BarChart3 
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, count, active }: any) => (
  <button
    className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors ${
      active ? 'bg-slate-700' : ''
    }`}
  >
    {Icon}
    <span>{label}</span>
    {count && (
      <span className="ml-auto bg-slate-600 px-2 py-0.5 rounded-full text-xs">
        {count}
      </span>
    )}
  </button>
);

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <MapPin size={20} />, label: 'Locations', count: '24' },
    { icon: <Battery size={20} />, label: 'Charge Points', count: '156' },
    { icon: <AlertCircle size={20} />, label: 'Alerts', count: '3' },
    { icon: <Users size={20} />, label: 'Customers' },
    { icon: <BarChart3 size={20} />, label: 'Analytics' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="h-screen w-64 bg-slate-800 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <Battery className="w-8 h-8 text-green-400" />
        <span className="text-xl font-bold">ChargePro</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
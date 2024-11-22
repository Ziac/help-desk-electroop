import React from 'react';
import { Bell, Search, Battery, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-6 fixed top-0 w-full z-50">
      <div className="flex items-center gap-2">
        <Battery className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-bold hidden sm:inline">Otojet</span>
      </div>
      
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Ara..."
          className="w-full px-4 py-2 focus:outline-none"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Kullanıcı"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm hidden sm:block">
            <p className="font-medium">Ahmet Yılmaz</p>
            <p className="text-gray-500">Destek Temsilcisi</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
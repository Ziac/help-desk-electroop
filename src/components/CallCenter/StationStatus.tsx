import React, { useState } from 'react';
import { Battery, Wifi, WifiOff, ChevronDown, ChevronUp, Activity, Zap } from 'lucide-react';

const StationStatus = () => {
  const [expandedStation, setExpandedStation] = useState<string | null>(null);

  const stations = [
    {
      id: 'CP-045',
      location: 'Zorlu Center',
      status: 'offline',
      power: '50 kW',
      lastSeen: '5 dk önce',
      connectorType: 'CCS2',
      usage: {
        today: '145 kWh',
        sessions: 12,
        availability: '87%'
      },
      metrics: {
        voltage: '400V',
        current: '125A',
        temperature: '35°C'
      }
    },
    {
      id: 'CP-032',
      location: 'Akasya AVM',
      status: 'online',
      power: '22 kW',
      lastSeen: 'Şimdi',
      connectorType: 'Type 2',
      usage: {
        today: '89 kWh',
        sessions: 8,
        availability: '92%'
      },
      metrics: {
        voltage: '230V',
        current: '32A',
        temperature: '28°C'
      }
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedStation(expandedStation === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {stations.map((station) => (
        <div
          key={station.id}
          className="card overflow-hidden"
        >
          <div 
            className="flex items-center gap-6 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleExpand(station.id)}
          >
            <div className="flex-shrink-0">
              <Battery className={`w-8 h-8 ${
                station.status === 'online' ? 'text-green-500' : 'text-red-500'
              }`} />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-medium">{station.id}</h3>
                <div className="flex items-center gap-1">
                  {station.status === 'online' ? (
                    <Wifi className="w-4 h-4 text-green-500" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`status-badge ${
                    station.status === 'online' ? 'status-badge-success' : 'status-badge-error'
                  }`}>
                    {station.status === 'online' ? 'Çevrimiçi' : 'Çevrimdışı'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>Konum: {station.location}</div>
                <div>Güç: {station.power}</div>
              </div>
            </div>

            <div className="flex-shrink-0">
              {expandedStation === station.id ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>

          {expandedStation === station.id && (
            <div className="px-4 pb-4 slide-in">
              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-500" />
                      Kullanım İstatistikleri
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bugünkü Kullanım:</span>
                        <span className="font-medium">{station.usage.today}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Toplam Oturum:</span>
                        <span className="font-medium">{station.usage.sessions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kullanılabilirlik:</span>
                        <span className="font-medium">{station.usage.availability}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Anlık Metrikler
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Voltaj:</span>
                        <span className="font-medium">{station.metrics.voltage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Akım:</span>
                        <span className="font-medium">{station.metrics.current}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sıcaklık:</span>
                        <span className="font-medium">{station.metrics.temperature}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="action-button bg-blue-500 hover:bg-blue-600">
                    Uzaktan Sıfırla
                  </button>
                  <button className="action-button bg-purple-500 hover:bg-purple-600">
                    Geçmişi Görüntüle
                  </button>
                  <button className="action-button bg-gray-500 hover:bg-gray-600">
                    Yapılandır
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StationStatus;
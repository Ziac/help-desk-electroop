import React, { useState } from 'react';
import { Terminal, AlertCircle, CheckCircle, ArrowDownCircle, ArrowUpCircle, Clock, Filter } from 'lucide-react';

interface OCPPLog {
  id: string;
  timestamp: string;
  direction: 'incoming' | 'outgoing';
  messageType: string;
  status: 'success' | 'error' | 'pending';
  message: string;
  details: {
    chargePointId: string;
    action: string;
    errorCode?: string;
    errorDetails?: string;
  };
  raw?: string;
}

const OCPPLogs = () => {
  const [showRawData, setShowRawData] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const logs: OCPPLog[] = [
    {
      id: 'OCPP1',
      timestamp: '2024-03-14 14:30:25',
      direction: 'incoming',
      messageType: 'StatusNotification',
      status: 'error',
      message: 'Charge point reported error: Overcurrent detected',
      details: {
        chargePointId: 'CP-045',
        action: 'StatusNotification',
        errorCode: 'OVERCURRENT',
        errorDetails: 'Current exceeded maximum threshold of 32A'
      },
      raw: '{"messageId":123,"action":"StatusNotification","payload":{"status":"Faulted","errorCode":"OVERCURRENT"}}'
    },
    {
      id: 'OCPP2',
      timestamp: '2024-03-14 14:30:26',
      direction: 'outgoing',
      messageType: 'Reset',
      status: 'pending',
      message: 'Sending remote reset command',
      details: {
        chargePointId: 'CP-045',
        action: 'Reset',
      },
      raw: '{"messageId":124,"action":"Reset","payload":{"type":"Hard"}}'
    },
    {
      id: 'OCPP3',
      timestamp: '2024-03-14 14:30:30',
      direction: 'incoming',
      messageType: 'ResetResponse',
      status: 'success',
      message: 'Charge point accepted reset command',
      details: {
        chargePointId: 'CP-045',
        action: 'ResetResponse'
      },
      raw: '{"messageId":124,"action":"ResetResponse","payload":{"status":"Accepted"}}'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getDirectionIcon = (direction: 'incoming' | 'outgoing') => {
    return direction === 'incoming' ? (
      <ArrowDownCircle className="w-5 h-5 text-blue-500" />
    ) : (
      <ArrowUpCircle className="w-5 h-5 text-purple-500" />
    );
  };

  const filteredLogs = selectedStatus === 'all' 
    ? logs 
    : logs.filter(log => log.status === selectedStatus);

  return (
    <div className="mt-6 pt-6 border-t">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-gray-500" />
          <h3 className="text-lg font-semibold">OCPP Communication Logs</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              className="text-sm border rounded-lg px-2 py-1"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="error">Errors</option>
              <option value="success">Success</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <button
            onClick={() => setShowRawData(!showRawData)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {showRawData ? 'Show Simplified' : 'Show Raw Data'}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredLogs.map((log) => (
          <div key={log.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {getDirectionIcon(log.direction)}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{log.messageType}</p>
                    <span className="text-xs text-gray-500">
                      {log.direction === 'incoming' ? 'From' : 'To'} {log.details.chargePointId}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{log.timestamp}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(log.status)}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  log.status === 'success' ? 'bg-green-100 text-green-700' :
                  log.status === 'error' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {log.status.toUpperCase()}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 bg-white p-2 rounded mb-3">
              {log.message}
            </p>

            {log.details.errorCode && (
              <div className="mb-3 text-sm bg-red-50 text-red-700 p-2 rounded flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5" />
                <div>
                  <p className="font-medium">Error Code: {log.details.errorCode}</p>
                  {log.details.errorDetails && (
                    <p className="text-red-600 mt-1">{log.details.errorDetails}</p>
                  )}
                </div>
              </div>
            )}

            {showRawData && log.raw && (
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500 mb-1">Raw OCPP Message:</p>
                <pre className="text-xs bg-gray-800 text-gray-200 p-2 rounded overflow-x-auto">
                  {JSON.stringify(JSON.parse(log.raw), null, 2)}
                </pre>
              </div>
            )}

            <div className="mt-3 pt-3 border-t flex justify-end gap-3">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View Details
              </button>
              {log.status === 'error' && (
                <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                  Troubleshoot
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OCPPLogs;
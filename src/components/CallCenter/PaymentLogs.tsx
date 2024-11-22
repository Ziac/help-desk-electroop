import React from 'react';
import { CreditCard, AlertCircle, CheckCircle, XCircle, Clock } from 'lucide-react';

interface PaymentLog {
  id: string;
  timestamp: string;
  type: 'charge' | 'refund' | 'error' | 'validation';
  status: 'success' | 'failed' | 'pending';
  amount: string;
  card: string;
  message: string;
  gatewayRef?: string;
  errorCode?: string;
}

const PaymentLogs = () => {
  const logs: PaymentLog[] = [
    {
      id: 'TXN123',
      timestamp: '2024-03-14 14:30:22',
      type: 'charge',
      status: 'success',
      amount: '$25.50',
      card: 'Visa •••• 4567',
      message: 'Payment successful',
      gatewayRef: 'ch_1N4X8J2eZvKYlo2C9A4jtk2M'
    },
    {
      id: 'TXN122',
      timestamp: '2024-03-14 14:29:55',
      type: 'validation',
      status: 'failed',
      amount: '$25.50',
      card: 'Visa •••• 4567',
      message: 'Card verification failed',
      errorCode: 'CARD_DECLINED'
    },
    {
      id: 'TXN121',
      timestamp: '2024-03-13 09:15:00',
      type: 'charge',
      status: 'pending',
      amount: '$18.75',
      card: 'Mastercard •••• 8901',
      message: 'Authorization pending',
      gatewayRef: 'ch_1N4X8J2eZvKYlo2C9A4jtk2N'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-purple-500" />
          <h3 className="text-lg font-semibold">Payment Gateway Logs</h3>
        </div>
        <div className="flex gap-2">
          <button className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            Last 24 Hours
          </button>
          <button className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            All Logs
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {logs.map((log) => (
          <div key={log.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {getStatusIcon(log.status)}
                <div>
                  <p className="font-medium">{log.type.charAt(0).toUpperCase() + log.type.slice(1)}</p>
                  <p className="text-sm text-gray-500">{log.timestamp}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                log.status === 'success' ? 'bg-green-100 text-green-700' :
                log.status === 'failed' ? 'bg-red-100 text-red-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {log.status.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
              <div>
                <span className="text-gray-500">Amount:</span>
                <span className="ml-2 font-medium">{log.amount}</span>
              </div>
              <div>
                <span className="text-gray-500">Card:</span>
                <span className="ml-2 font-medium">{log.card}</span>
              </div>
              {log.gatewayRef && (
                <div className="col-span-2">
                  <span className="text-gray-500">Gateway Reference:</span>
                  <span className="ml-2 font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                    {log.gatewayRef}
                  </span>
                </div>
              )}
              {log.errorCode && (
                <div className="col-span-2 flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>Error Code: {log.errorCode}</span>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 bg-white p-2 rounded">
              {log.message}
            </p>

            <div className="mt-3 pt-3 border-t flex justify-end gap-3">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View Details
              </button>
              {log.status === 'failed' && (
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

export default PaymentLogs;
import React, { useState } from 'react';
import { User, CreditCard, Car, MapPin, History, ChevronDown, ChevronUp } from 'lucide-react';
import PaymentLogs from './PaymentLogs';
import OCPPLogs from './OCPPLogs';

interface Vehicle {
  make: string;
  model: string;
  year: string;
  socketType: string;
  plateNumber: string;
}

interface PaymentMethod {
  cardType: string;
  lastFour: string;
  bank: string;
  expiryDate: string;
}

interface CustomerDetailsProps {
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
    vehicles: Vehicle[];
    paymentMethods: PaymentMethod[];
  };
}

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  const [showPaymentLogs, setShowPaymentLogs] = useState(false);
  const [showOCPPLogs, setShowOCPPLogs] = useState(false);

  const mockCustomer = {
    name: 'Mehmet Demir',
    phone: '(532) 123 4567',
    email: 'mehmet.demir@example.com',
    address: 'Ataşehir, İstanbul',
    vehicles: [
      {
        make: 'Togg',
        model: 'T10X',
        year: '2024',
        socketType: 'CCS2',
        plateNumber: '34 ABC 123'
      }
    ],
    paymentMethods: [
      {
        cardType: 'Mastercard',
        lastFour: '4567',
        bank: 'Yapı Kredi',
        expiryDate: '12/24'
      }
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-fadeIn">
      <div className="flex items-start gap-6 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-gray-600" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">{mockCustomer.name}</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600">
            <p>{mockCustomer.phone}</p>
            <p>{mockCustomer.email}</p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {mockCustomer.address}
            </p>
          </div>
        </div>
        <button className="action-button bg-green-500 hover:bg-green-600">
          Destek Oturumu Başlat
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Car className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold">Kayıtlı Araçlar</h3>
          </div>
          <div className="space-y-4">
            {mockCustomer.vehicles.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </span>
                  <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {vehicle.socketType}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Plaka: {vehicle.plateNumber}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-semibold">Ödeme Yöntemleri</h3>
          </div>
          <div className="space-y-4">
            {mockCustomer.paymentMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{method.cardType}</span>
                  <span className="text-sm">
                    Son Kullanma: {method.expiryDate}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{method.bank} •••• {method.lastFour}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold">Son Aktiviteler</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Tüm Geçmişi Görüntüle
          </button>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Son şarj: Bugün 14:30 - Zorlu Center (CP-045)</p>
          <p>Destek iletişimi: 2 gün önce - Ödeme sorunu çözüldü</p>
          <p>Araç eklendi: 1 hafta önce - Togg T10X</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t">
        <button
          onClick={() => setShowPaymentLogs(!showPaymentLogs)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          {showPaymentLogs ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          <span className="font-medium">Ödeme Geçmişi</span>
        </button>
        {showPaymentLogs && <PaymentLogs />}
      </div>

      <div className="mt-6 pt-6 border-t">
        <button
          onClick={() => setShowOCPPLogs(!showOCPPLogs)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          {showOCPPLogs ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          <span className="font-medium">Şarj İstasyonu İletişim Kayıtları</span>
        </button>
        {showOCPPLogs && <OCPPLogs />}
      </div>
    </div>
  );
};

export default CustomerDetails;
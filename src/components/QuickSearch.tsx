import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'user' | 'chargepoint' | 'location';
  title: string;
  subtitle: string;
}

const QuickSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const mockResults: SearchResult[] = [
    { id: 'USR123', type: 'user', title: 'John Smith', subtitle: '+1 (555) 123-4567' },
    { id: 'CP-045', type: 'chargepoint', title: 'CP-045', subtitle: 'Central Station, Platform 3' },
    { id: 'LOC-12', type: 'location', title: 'Central Station', subtitle: '4 Active Chargers' },
  ];

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-[15vh]">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl">
        <div className="flex items-center p-4 border-b">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users, charge points, or locations... (Ctrl+K)"
            className="w-full px-4 py-2 focus:outline-none text-lg"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="p-2 max-h-[60vh] overflow-y-auto">
          {mockResults.map((result) => (
            <button
              key={result.id}
              className="w-full p-3 hover:bg-gray-50 flex items-center gap-4 rounded-lg group"
              onClick={() => {
                // Handle navigation
                setIsOpen(false);
              }}
            >
              <div className={`p-2 rounded ${
                result.type === 'user' ? 'bg-green-100 text-green-700' :
                result.type === 'chargepoint' ? 'bg-blue-100 text-blue-700' :
                'bg-purple-100 text-purple-700'
              }`}>
                {result.id}
              </div>
              <div className="text-left">
                <p className="font-medium">{result.title}</p>
                <p className="text-sm text-gray-500">{result.subtitle}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 text-sm text-gray-400">
                View details ↗
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
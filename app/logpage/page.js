'use client';

import Nav from '@/components/nav';
import { useEffect, useState } from 'react';

export default function Page() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/getlogs');
      const data = await res.json();
      setLogs(data.result);
    };
  
    // Initial fetch
    fetchData();
  
    // Set up polling every 5 seconds
    const interval = setInterval(fetchData, 3000);
  
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="min-h-screen bg-[#12141A] text-white">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header for Large Screens */}
        <div className="hidden lg:flex justify-between bg-[#1A1D24] px-6 py-3 rounded-lg font-semibold text-sm text-gray-400 border border-[#252835]">
          <div className="w-1/5 text-center">Timestamp</div>
          <div className="w-1/5 text-center">Alarm</div>
          <div className="w-1/5 text-center">Time</div>
          <div className="w-1/5 text-center">Camera</div>
          <div className="w-1/5 text-center">Number</div>
        </div>

        {/* Log Entries */}
        <div className="mt-4 space-y-4">
          {logs.map((entry, index) => (
            <div
              key={index}
              className="bg-[#15161D] border border-[#252835] rounded-lg p-4 text-sm"
            >
              {/* Desktop layout */}
              <div className="hidden lg:flex justify-between text-center">
                <div className="w-1/5">{entry.timestamp}</div>
                <div className="w-1/5">{entry.log?.alarm}</div>
                <div className="w-1/5">{entry.log?.time}</div>
                <div className="w-1/5">{entry.log?.camera}</div>
                <div className="w-1/5">{entry.log?.number}</div>
              </div>

              {/* Mobile layout */}
              <div className="lg:hidden space-y-1">
                <p><span className="text-gray-400">Timestamp:</span> {entry.timestamp}</p>
                <p><span className="text-gray-400">Alarm:</span> {entry.log?.alarm}</p>
                <p><span className="text-gray-400">Time:</span> {entry.log?.time}</p>
                <p><span className="text-gray-400">Camera:</span> {entry.log?.camera}</p>
                <p><span className="text-gray-400">Number:</span> {entry.log?.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

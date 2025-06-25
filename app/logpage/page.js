'use client';

import Nav from '@/components/nav';
import { useEffect, useState } from 'react';

export default function Page() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/getlogs')
      .then((res) => res.json())
      .then((data) => setLogs(data.result));
  }, []);

  return (
    <div >
        <Nav></Nav>
        <div className='w-full bg-[#12141A] text-white py-4 px-26 shadow-md'>
        <h1 className="text-1xl font-bold mb-4">Detection Logs</h1>
      <div className="space-y-4">
        {logs.map((entry, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow bg-[#15161D] border border-[#252835]"
          >
            <p><strong>Timestamp:</strong> {entry.timestamp}</p>
            <p><strong>Alarm:</strong> {entry.log.alarm}</p>
            <p><strong>Face Detected:</strong> {entry.log.face_detection ? 'Yes' : 'No'}</p>
            <p><strong>Time:</strong> {entry.log.time}</p>
            <p><strong>Camera:</strong> {entry.log.camera}</p>
            <p><strong>Number:</strong> {entry.log.number}</p>
          </div>
        ))}
      </div>

        </div>
      
    </div>
  );
}

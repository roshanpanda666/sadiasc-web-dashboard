"use client";
import Nav from "@/components/nav";
import { useEffect, useState } from "react";

export default function Home() {
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getsettingsdata");
        const json = await res.json();
        const allData = json.result;
        const latest = allData[allData.length - 1];
        setLatestData(latest);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    // 🚀 Fetch immediately
    fetchData();

    // 🔁 Set interval for 3s updates
    const interval = setInterval(fetchData, 3000);

    // 🔚 Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <Nav />

      {latestData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-24 gap-y-12 mt-11 w-[90vw]">

          {/* Each Box */}
          {[
            { label: "⏰ Time", value: latestData.time },
            { label: "🔊 Sound", value: latestData.sound },
            { label: "📷 Camera", value: latestData.camera },
            { label: "🛠 Config", value: latestData.config },
            { label: "📁 File", value: latestData.file },
            { label: "📜 Script", value: latestData.script },
            { label: "💻 CMD", value: latestData.cmd },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#15161D] h-40 shadow-xl border-1 border-[#454545] rounded-2xl p-6 hover:border-green-300 transition-all duration-300 transform hover:scale-105"
            >
              <h2 className="text-md font-semibold text-gray-300 mb-1">{item.label}</h2>
              <p className="text-2xl text-center mt-6 font-bold text-gray-200">{item.value}</p>
            </div>
          ))}

        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10 animate-pulse">Loading settings... 🔄</p>
      )}
    </div>
  );
}

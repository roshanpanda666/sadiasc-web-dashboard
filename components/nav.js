import React from 'react';
import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="w-full bg-[#12141A] text-white py-4 px-14 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="text-lg font-semibold">
            S.A.D.I.A.S.C.
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <button className="hover:text-gray-400 transition">HOME</button>
          <Link href='logpage'>
          <button className="hover:text-gray-400 transition">LOG</button>
          </Link>

          <button className="hover:text-gray-400 transition">SETTING</button>
          <button className="hover:text-red-400 transition">LOG OUT</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

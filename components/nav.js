'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: Lucide icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#12141A] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side */}
        <div className="text-xl font-semibold">
          S.A.D.I.A.S.C.
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium">
          <Link href='/'> <button className="hover:text-gray-400 transition focus:text-green-300">HOME</button></Link>
          <Link href="/logpage">
            <button className="hover:text-gray-400 transition focus:text-green-300">LOG</button>
          </Link>
          <button className="hover:text-gray-400 transition">SETTING</button>
          <button className="hover:text-red-400 transition">LOG OUT</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-3 flex flex-col justify-center items-center space-y-4 text-sm font-medium">
          <button className="hover:text-gray-400 transition">HOME</button>
          <Link href="/logpage">
            <button className="hover:text-gray-400 transition">LOG</button>
          </Link>
          <button className="hover:text-gray-400 transition">SETTING</button>
          <button className="hover:text-red-400 transition">LOG OUT</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;

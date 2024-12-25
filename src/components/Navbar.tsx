'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosClose, IoIosMenu } from 'react-icons/io';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={`w-full h-20 bg-white ${isMenuOpen ? '' : 'shadow-md'} flex flex-wrap justify-between items-center px-4 md:px-12 z-[1000] fixed`}>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-600">MB Murad</h1>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center justify-center gap-5 w-full md:w-auto absolute md:static top-20 left-0 text-center bg-white p-5 md:p-5 md:mt-0 ${isMenuOpen ? 'shadow-lg' : ''}`}>
          <ul className="flex flex-col md:flex-row items-center gap-5">
            <li className="text-lg hover:text-gray-600 underline"><Link href={'/'}>Home</Link></li>
            <li className="text-lg hover:text-gray-600 hover:underline"><Link href={'/projects'}>Projects</Link></li>
            <li className="text-lg hover:text-gray-600 hover:underline"><Link href={'/about'}>About</Link></li>
            <li className="text-lg hover:text-gray-600 hover:underline"><Link href={'/contact'}>Contact</Link></li>
          </ul>
        </div>

        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </div>
      </nav>
    </>
  );
}

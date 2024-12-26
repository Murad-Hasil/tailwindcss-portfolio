'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import '@/app/styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className='navbar'>
        <div>
          <h1>MB Murad</h1>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li className='active'><Link href={'/'}>Home</Link></li>
            <li><Link href={'/projects'}>Projects</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
        </ul>

        <div className="menu-icons" onClick={toggleMenu}>
          {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </div>
      </nav>
    </>
  );
}
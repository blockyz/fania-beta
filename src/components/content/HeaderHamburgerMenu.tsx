'use client';

import { useState } from 'react';
import Link from "next/link";
import { translate } from '@/lib/helper';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';


  export interface NavigationItem {
  href: string;
  labelKey: string;
}

export const navigationItems: NavigationItem[] = [
  { href: "/", labelKey: 'Home' },
  { href: "/Field", labelKey: 'Field' },
  { href: "/events", labelKey: 'Events' },
  { href: "/about", labelKey: 'AboutUs' },
];
export default function HeaderHamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <div
        onClick={() => setIsMenuOpen(true)}
        className="flex flex-col justify-between cursor-pointer w-6 h-5 focus:outline-none z-50 relative"
      >
        <span className="block h-0.5 w-full bg-black rounded"></span>
        <span className="block h-0.5 w-full bg-black rounded"></span>
        <span className="block h-0.5 w-full bg-black rounded"></span>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#F9F9FB] shadow-xl z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Close Button */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="self-end p-4  font-bold text-2xl transition-colors"
        >
          <HugeiconsIcon className='cursor-pointer' icon={Cancel01Icon} />
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col  gap-3 mt-8 px-4">
          {navigationItems.map((item: NavigationItem) => (
            <div
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="  font-medium text-lg"
            >
              <div className='bg-gray-200 cursor-pointer  transition-colors duration-200 hover:bg-[#AFAFAF] rounded-xl px-3 py-3'>
              {translate(item.labelKey)}
              </div>
            </div>
          ))}
        </nav>

        {/* Optional Footer / Language / Search */}
        <div className="mt-auto px-6 py-6 border-t border-gray-200">
          <div className="w-full text-center py-2 rounded-lg bg-gray-200 cursor-pointer  transition-colors duration-200 hover:bg-[#AFAFAF] font-medium">
            {translate('Fa')}
          </div>
        </div>
      </div>
    </div>
  );
}

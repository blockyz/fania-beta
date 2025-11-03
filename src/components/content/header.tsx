'use client';

import type { NextPage } from 'next';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search01Icon } from '@/assets/Icons';
import { translate } from '@/lib/helper';

interface NavigationItem {
  href: string;
  labelKey: string;
}

const navigationItems: NavigationItem[] = [
  { href: "/", labelKey: 'Home' },
  { href: "/Field", labelKey: 'Field' },
  { href: "/events", labelKey: 'Events' },
  { href: "/about", labelKey: 'AboutUs' },
];

const Header: NextPage = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'Fa' | 'En'>('Fa');

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full relative flex items-center justify-between gap-5 text-right text-num-14 text-black font-pelak px-10 py-10">
      {/* Logo */}
      <div className="flex items-center text-left text-[16px] font-inter">
        <Link href="/" className="flex items-center justify-end gap-4 hover:opacity-80 transition-opacity">
          <div className="h-12 w-12 relative rounded-[50%] bg-[#AFAFAF]" />
          <b className="relative">{translate('Logo')}</b>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-4">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-num-999 flex items-center justify-center py-3 px-num-16 gap-2 transition-colors hover:bg-gray-100 ${isActivePath(item.href) ? 'bg-[#F9F9FB]' : 'bg-whitesmoke'}`}
          >
            {currentLang === 'Fa' && !isActivePath(item.href) && (
              <div className="h-1 w-1 relative rounded-[50%] bg-gray" />
            )}

            <div className="relative tracking-num--0_16 leading-num-20 font-semibold">
              {translate(item.labelKey)}
            </div>

            {currentLang !== 'Fa' && !isActivePath(item.href) && (
              <div className="h-1 w-1 relative rounded-[50%] bg-gray" />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1"
        aria-label={translate('Home')} 
      >
        <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Language & Search */}
      <div className="flex items-center justify-center gap-4">
        <button className="rounded-num-999 bg-whitesmoke flex items-center justify-center py-2.5 px-num-16 gap-2 hover:bg-gray-200 transition-colors">
          <Search01Icon width={24} height={24} />
        </button>

        <button 
          className="rounded-num-999 bg-whitesmoke flex items-center justify-center py-2.5 px-num-16 gap-2 hover:bg-gray-200 transition-colors"
          onClick={() => setCurrentLang(currentLang === 'En' ? 'Fa' : 'En')}
        >
          <div className="h-1 w-1 relative rounded-[50%] bg-gray" />
          <div className='w-6 h-6 bg-[#AFAFAF] rounded-full' />
          <div className="relative tracking-num--0_16 leading-num-20 font-medium">
            {translate(currentLang)}
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50">
          <nav className="flex flex-col p-4 gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-num-999 flex items-center justify-center py-3 px-num-16 transition-colors hover:bg-gray-100 ${isActivePath(item.href) ? 'bg-black text-white' : 'bg-whitesmoke'}`}
              >
                {translate(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

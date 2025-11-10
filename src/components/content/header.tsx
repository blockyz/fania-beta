'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { translate } from '../../lib/helper'


interface NavigationItem {
  href: string;
  label: string
}

const navigationItems: NavigationItem[] = [
  { href: "/", label: 'Home' },
  // { href: "/products", label: { fa: "حوزه فعالیت", en: "Products" } }, //need to fix
  // { href: "/certificates", label: { fa: "گواهینامه ها", en: "Certificates" } },
  // { href: "/events", label: { fa: "نمایشگاه ها", en: "Events" } },
  // { href: "/blog", label: { fa: "وبلاگ", en: "Blog" } },
  // { href: "/about", label: { fa: "درباره ما", en: "About Us" } },
];

const Header: NextPage = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleLanguage = () => {

  };

  return (
    <header className="w-full relative flex items-center justify-between gap-5 text-right text-num-14 text-black bg-white border-b border-gray-200 px-4 py-3">
      {/* Language Toggle */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={toggleLanguage}
          className="rounded-num-999 bg-whitesmoke flex items-center justify-center py-2.5 px-num-16 gap-2 hover:bg-gray-200 transition-colors"
        >
          <div className="relative tracking-num--0_16 leading-num-20 font-medium">
            Fa
          </div>
          <div className="h-1 w-1 relative rounded-[50%] bg-gray" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-4">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-num-999 flex items-center justify-center py-3 px-num-16 gap-2 transition-colors hover:bg-gray-100 ${isActivePath(item.href)
              ? 'bg-black text-white'
              : 'bg-whitesmoke'
              }`}
          >
            <div className="relative tracking-num--0_16 leading-num-20 font-semibold">
              {translate(item.label)}
            </div>
            {!isActivePath(item.href) && (
              <div className="h-1 w-1 relative rounded-[50%] bg-gray" />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Logo */}
      <div className="flex items-center text-left text-[16px] font-inter">
        <Link href="/" className="flex items-center justify-end gap-4 hover:opacity-80 transition-opacity">
          <b className="relative">LOGO</b>
          <div className="h-12 w-12 relative rounded-[50%] bg-darkgray" />
        </Link>
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
                className={`rounded-num-999 flex items-center justify-center py-3 px-num-16 transition-colors hover:bg-gray-100 ${isActivePath(item.href)
                  ? 'bg-black text-white'
                  : 'bg-whitesmoke'
                  }`}
              >
                <div className="relative tracking-num--0_16 leading-num-20 font-semibold">
                  {translate(item.label)}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

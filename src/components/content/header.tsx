'use client';

import type { NextPage } from 'next';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translate } from '@/lib/helper';
import { Button } from '../button/default-button';
import HeaderHamburgerMenu from './HeaderHamburgerMenu';
import PopupCard from '../PopUp/PopupCard';
import { Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface NavigationItem {
  href: string;
  labelKey: string;
  hasPopup?: boolean;
}

const navigationItems: NavigationItem[] = [
  { href: "/", labelKey: 'Home' },
  { href: "/Field", labelKey: 'Field', hasPopup: true },
  { href: "/events", labelKey: 'Events', hasPopup: true },
  { href: "/about", labelKey: 'AboutUs' },
];

const popupData: Record<string, { label: string; imageSrc: string; }[]> = {
  Field: [
    { label: 'Medical', imageSrc: '/images/medical.jpg' },
    { label: 'Agriculture', imageSrc: '/images/agriculture.jpg' },
    { label: 'GeologyAndMineralogy', imageSrc: '/images/geology.jpg' },
    { label: 'SurveillanceAndSecurity', imageSrc: '/images/security.jpg' },
    { label: 'LivestockAndPoultry', imageSrc: '/images/farming.jpg' },
    { label: 'WaterDesalination', imageSrc: '/images/water.jpg' },
    { label: 'MeteorologyAndRoadMaintenance', imageSrc: '/images/weather.jpg' },


  ],
  Events: [
    { label: 'Event1', imageSrc: '/images/event1.jpg' },
    { label: 'Event2', imageSrc: '/images/event2.jpg' },
    { label: 'Event3', imageSrc: '/images/event3.jpg' },
  ],
};

const Header: NextPage = () => {
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full flex items-center justify-between gap-5 text-right text-num-14 text-black font-pelak px-10 py-10 absolute top-0 left-0  bg-transparent z-10">
      {/* Logo */}
      <div className="flex items-center text-left text-[16px] font-inter">
        <Link href="/" className="flex items-center justify-end gap-4 hover:opacity-80 transition-opacity">
          <div className="h-12 w-12 relative rounded-full bg-[#AFAFAF]" />
          <b className="relative">{translate('Logo')}</b>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-4">
        {navigationItems.map((item) => (
          <div key={item.href} className="relative group">
            <Button
              className={`rounded-num-999 cursor-pointer flex items-center justify-center py-3 px-num-16 gap-2 transition-colors
        ${isActivePath(item.href) ? 'bg-[#F9F9FB]' : 'bg-whitesmoke hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-2">
                {(item.labelKey !== 'Home' && item.labelKey !== 'AboutUs') && (
                  <span className="bg-black rounded-full inline-block transition-all duration-200 group-hover:w-2 group-hover:h-2 w-1 h-1" />
                )}
                <span className="tracking-num--0_16 leading-num-20 font-semibold text-black text-nowrap">
                  {translate(item.labelKey)}
                </span>
              </div>
            </Button>

            {item.hasPopup && (
              <>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-10 h-4 group-hover:block hidden" />
                <div
                  className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 opacity-0 invisible
            group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                >
                  <PopupCard
                    items={popupData[item.labelKey]}
                    onClose={() => { }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </nav>


      {/* Language & Search */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-full bg-whitesmoke flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
          <HugeiconsIcon icon={Search01Icon} />
        </div>
        <Button
          size='md'
          radius="full"
          className="bg-whitesmoke hover:bg-gray-200 cursor-pointer flex items-center justify-between gap-2 px-num-10 py-2.5 text-black"
          textClassName="tracking-num--0_16 leading-num-20 font-medium"
        >
          <div className='flex gap-2 items-center'>
            <span className="w-1 h-1 bg-black rounded-full inline-block" />
            <div className='w-6 h-6 flex items-center bg-[#AFAFAF] rounded-full' />
            {translate('Fa')}
          </div>
        </Button>
      </div>

      <HeaderHamburgerMenu />
    </header>
  );
};

export default Header;

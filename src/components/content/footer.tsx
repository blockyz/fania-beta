'use client';

import { InstagramIcon, TelegramIcon, WhatsappIcon } from "@/assets/Icons";
import Link from "next/link";
import { JSX, useState } from "react";

interface FooterLink {
  href: string;
  label: {
    fa: string;
    en: string;
  };
}

interface FooterPage {
  href: string;
  label: {
    fa: string;
    en: string;
  };
}

interface SocialLink {
  href: string;
  label: string;
  icon : JSX.Element
}

const footerLinks: FooterLink[] = [
  { href: "/", label: { fa: "خانه", en: "Home" } },
  { href: "/products", label: { fa: "حوزه فعالیت", en: "Products" } },
  { href: "/about", label: { fa: "درباره ما", en: "About Us" } },
  { href: "/blog", label: { fa: "تماس با ما", en: "Contact US" } },

];
const footerPages: FooterPage[] = [
  { href: "/blog", label: { fa: "مقالات", en: "Blog" } },

  { href: "/certificates", label: { fa: "مدارک و گواهینامه ها", en: "Certificates" } },
  { href: "/events", label: { fa: "نمایشگاه ها و افتخارات", en: "Events" } },

];

const socialLinks: SocialLink[] = [
  { href: "#", label: "LinkedIn", icon: <InstagramIcon className="w-5 h-5" /> },
  { href: "#", label: "Twitter", icon: <WhatsappIcon className="w-5 h-5" /> },
  { href: "#", label: "Instagram", icon: <TelegramIcon className="w-5 h-5" /> },
];

const Footer = () => {
  const [currentLang, setCurrentLang] = useState<'fa' | 'en'>('fa');

  return (
    <footer className="w-full bg-[#CBCDFF] rounded-[40px] text-black  mt-auto">
      <div className="max-w-7xl mx-auto px-10 py-[81px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 relative rounded-[50%] bg-[#AFAFAF]" />
              <h3 className="text-lg font-bold font-inter">LOGO</h3>
            </div>
            <p className="text-sm  font-semibold leading-relaxed">
              {currentLang === 'fa'
                ? "شرکت پیشرو در ارائه محصولات و خدمات با کیفیت در صنعت"
                : "Leading company providing quality products and services in the industry"
              }
            </p>
          </div>



          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg  font-pelak">
              {currentLang === 'fa' ? "لینک های سریع" : "Quick Links"}
            </h4>
            <nav className="flex flex-col space-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold hover:text-white transition-colors font-pelak"
                >
                  {link.label[currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h4 className="text-lg  font-pelak">
              {currentLang === 'fa' ? "صفحات" : "Quick Links"}
            </h4>
            <nav className="flex flex-col space-y-4">
              {footerPages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold hover:text-white transition-colors font-pelak"
                >
                  {link.label[currentLang]}
                </Link>
              ))}
            </nav>

            {/* Social Media */}
            <div className="space-y-4 pt-6">
              <h4 className="text-lg font-pelak">
                {currentLang === 'fa' ? "شبکه های اجتماعی" : "Social Media"}
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-[#9B9EF0] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}

              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="space-y-6 text-sm ">
              <div className="flex flex-col gap-2">
                <span className="font-inter ">آدرس</span>
                <span className="font-pelak font-semibold">
                  {currentLang === 'fa'
                    ? " تهران ، خیابان طالقانی ، خیابان امام خمینی ، خیابان امام رضا ، خیابان امام هشتم ..."
                    : "Address: Tehran, Iran"
                  }
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-pelak">تماس</span>
                <span className="font-inter font-semibold">+98 21 1234 5678</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-pelak">ایمیل</span>
                <span className="font-inter font-semibold">info@company.com</span>
              </div>
            </div>
          </div>


        </div>


      </div>
    </footer>
  );
};

export default Footer;
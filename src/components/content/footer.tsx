'use client';

import Link from "next/link";
import { useState } from "react";

interface FooterLink {
  href: string;
  label: {
    fa: string;
    en: string;
  };
}

interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

const footerLinks: FooterLink[] = [
  { href: "/", label: { fa: "خانه", en: "Home" } },
  { href: "/products", label: { fa: "محصولات", en: "Products" } },
  { href: "/certificates", label: { fa: "گواهینامه ها", en: "Certificates" } },
  { href: "/events", label: { fa: "رویدادها", en: "Events" } },
  { href: "/blog", label: { fa: "وبلاگ", en: "Blog" } },
  { href: "/about", label: { fa: "درباره ما", en: "About Us" } },
];

const socialLinks: SocialLink[] = [
  { href: "#", label: "LinkedIn", icon: "🔗" },
  { href: "#", label: "Twitter", icon: "🐦" },
  { href: "#", label: "Instagram", icon: "📷" },
  { href: "#", label: "Email", icon: "✉️" },
];

const Footer = () => {
  const [currentLang, setCurrentLang] = useState<'fa' | 'en'>('fa');

  return (
    <footer className="w-full bg-darkgray text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 relative rounded-[50%] bg-gray" />
              <h3 className="text-lg font-bold font-inter">COMPANY NAME</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {currentLang === 'fa'
                ? "شرکت پیشرو در ارائه محصولات و خدمات با کیفیت در صنعت"
                : "Leading company providing quality products and services in the industry"
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-pelak">
              {currentLang === 'fa' ? "لینک های سریع" : "Quick Links"}
            </h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors font-pelak"
                >
                  {link.label[currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-pelak">
              {currentLang === 'fa' ? "اطلاعات تماس" : "Contact Info"}
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span className="font-pelak">
                  {currentLang === 'fa'
                    ? "آدرس: تهران، ایران"
                    : "Address: Tehran, Iran"
                  }
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span className="font-inter">+98 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span className="font-inter">info@company.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-pelak">
              {currentLang === 'fa' ? "شبکه های اجتماعی" : "Social Media"}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300 font-pelak">
              {currentLang === 'fa'
                ? `© ${new Date().getFullYear()} تمامی حقوق محفوظ است.`
                : `© ${new Date().getFullYear()} All rights reserved.`
              }
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentLang(currentLang === 'fa' ? 'en' : 'fa')}
                className="text-sm text-gray-300 hover:text-white transition-colors font-pelak"
              >
                {currentLang === 'fa' ? 'English' : 'فارسی'}
              </button>

              <div className="flex gap-4 text-sm text-gray-300">
                <Link href="/privacy" className="hover:text-white transition-colors font-pelak">
                  {currentLang === 'fa' ? "حریم خصوصی" : "Privacy Policy"}
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors font-pelak">
                  {currentLang === 'fa' ? "شرایط استفاده" : "Terms of Service"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
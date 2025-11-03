'use client';

import { JSX } from "react";
import Link from "next/link";
import { translate } from "@/lib/helper";
import { InstagramIcon, TelegramIcon, WhatsappIcon } from "@/assets/Icons";

interface FooterLink {
  href: string;
  labelKey: string;
}

interface FooterPage {
  href: string;
  labelKey: string;
}

interface SocialLink {
  href: string;
  label: string;
  icon: JSX.Element;
}

const footerLinks: FooterLink[] = [
  { href: "/", labelKey: "Home" },
  { href: "/Field", labelKey: "Field" },
  { href: "/AboutUs", labelKey: "AboutUs" },
  { href: "/ContactUs", labelKey: "ContactUs" }, 
];

const footerPages: FooterPage[] = [
  { href: "/Blog", labelKey: "Blog" },
  { href: "/Certificates", labelKey: "Certificates" },
  { href: "/Events", labelKey: "Events" },
];

const socialLinks: SocialLink[] = [
  { href: "#", label: "LinkedIn", icon: <InstagramIcon className="w-5 h-5" /> },
  { href: "#", label: "Twitter", icon: <WhatsappIcon className="w-5 h-5" /> },
  { href: "#", label: "Instagram", icon: <TelegramIcon className="w-5 h-5" /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#CBCDFF] rounded-[40px] text-black mt-auto">
      <div className="max-w-7xl mx-auto px-10 py-[81px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 relative rounded-[50%] bg-[#AFAFAF]" />
              <h3 className="text-lg font-bold font-inter">{translate("Logo")}</h3>
            </div>
            <p className="text-sm font-semibold leading-relaxed">
              {translate("CompanyDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-pelak">{translate("QuickLinks")}</h4>
            <nav className="flex flex-col space-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold hover:text-white transition-colors font-pelak"
                >
                  {translate(link.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Pages & Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-pelak">{translate("Pages")}</h4>
            <nav className="flex flex-col space-y-4">
              {footerPages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold hover:text-white transition-colors font-pelak"
                >
                  {translate(link.labelKey)}
                </Link>
              ))}
            </nav>

            <div className="space-y-4 pt-6">
              <h4 className="text-lg font-pelak">{translate("SocialMedia")}</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-[#9B9EF0] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="space-y-6 text-sm">
              <div className="flex flex-col gap-2">
                <span className="font-inter">{translate("Address")}</span>
                <span className="font-pelak font-semibold">{translate("Tehran")}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-pelak">{translate("Phone")}</span>
                <span className="font-inter font-semibold">021 2233456</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-pelak">{translate("Email")}</span>
                <span className="font-inter font-semibold">example@email.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

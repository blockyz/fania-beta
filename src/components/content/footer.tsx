
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
  { href: "#", label: "LinkedIn", icon: <InstagramIcon color="#FFFFFF" className="w-5 h-5" /> },
  { href: "#", label: "Twitter", icon: <WhatsappIcon color="#FFFFFF" className="w-5 h-5" /> },
  { href: "#", label: "Instagram", icon: <TelegramIcon color="#FFFFFF" className="w-5 h-5" /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#272962] text-[#FFFFFF] mt-auto rounded-[40px]">
      <div className="max-w-7xl mx-auto px-8 md:px-10 py-[81px]">

        {/* Wrapper اصلی: Flex دسکتاپ، ستون موبایل */}
        <div className="flex flex-col md:flex-row  gap-10 md:gap-20">

          {/* Logo + Description */}
          <div className="space-y-6 shrink-0 md:flex-1 order-last md:order-first">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 relative rounded-full bg-[#AFAFAF]" />
              <h3 className="text-lg font-bold font-inter">{translate("Logo")}</h3>
            </div>
            <p className="text-sm w-[75%] text-justify font-semibold leading-relaxed">
              {translate("CompanyDescription")}
            </p>
          </div>

          {/* Links Wrapper */}
          <div className="flex flex-col md:flex-row ml-5 justify-between gap-10 md:gap-20 flex-1">

            {/* Quick Links */}
            <div className="space-y-4 min-w-[120px]">
              <h4 className="text-lg text-[#CDCED6] font-pelak">{translate("QuickLinks")}</h4>
              <nav className="flex flex-col space-y-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold transition-colors font-pelak"
                  >
                    {translate(link.labelKey)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Pages + Social Media */}
            <div className="space-y-4 min-w-[120px]">
              <h4 className="text-lg text-[#CDCED6] font-pelak">{translate("Pages")}</h4>
              <nav className="flex flex-col text-nowrap space-y-4">
                {footerPages.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold  transition-colors font-pelak"
                  >
                    {translate(link.labelKey)}
                  </Link>
                ))}
              </nav>

              {/* Social Media زیر Pages */}
              <div className="mt-6 flex flex-wrap gap-3">
                <h4 className="text-lg text-[#CDCED6] text-nowrap font-pelak w-full">{translate("SocialMedia")}</h4>
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-[#5753C6] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 min-w-[120px]">
              <div className="space-y-6 text-sm">
                <div className="flex flex-col gap-2">
                  <span className="font-inter text-[#CDCED6]">{translate("Address")}</span>
                  <span className="font-pelak font-semibold">{translate("Tehran")}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-pelak text-[#CDCED6]">{translate("Phone")}</span>
                  <span className="font-inter font-semibold">021 2233456</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-pelak text-[#CDCED6]">{translate("Email")}</span>
                  <span className="font-inter font-semibold">example@email.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

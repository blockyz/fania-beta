import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google'
import "./globals.css";
import Header from "@/components/content/header";
import Footer from "@/components/content/footer";

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: "--font-vazirmatn",
})

export const metadata: Metadata = {

  title: "FANIA",
  description: "Welcome To Fania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body dir="rtl" className={`min-h-screen flex flex-col ${vazirmatn.className}`}>
        <Header />
        <main className="grow">
          {children}
        </main>
        <div className="px-10 py-[46px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
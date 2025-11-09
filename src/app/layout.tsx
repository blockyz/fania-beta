import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google'

import "./globals.css";

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
    <html lang="fa" >
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  );
}
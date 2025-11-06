import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pelak = localFont({
  src: "../../public/fonts/PelakFA-Black.ttf",
  variable: "--font-pelak",
  display: "swap",
});

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
      <body className={pelak.className}>
        {children}
      </body>
    </html>
  );
}
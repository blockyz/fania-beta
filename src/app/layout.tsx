import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/content/header";
import Footer from "@/components/content/footer";

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
    <html lang="fa" dir="rtl">
      {/* <body className={pelak.className}> */}

      <body className="min-h-screen flex flex-col">
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
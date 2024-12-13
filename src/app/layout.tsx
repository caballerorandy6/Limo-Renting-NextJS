import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/my-components/header/Header";
import Footer from "@/components/my-components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Miami Limo and Car Service",
  description:
    "Miami Limo & Car Service, Online Reservations, Airport Transfers, Corporate Events, Weddings, Proms, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

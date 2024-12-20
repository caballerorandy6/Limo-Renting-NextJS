import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/my-components/header/Header";
import Footer from "@/components/my-components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Car Services in Miami - Chauffeured Car, Limo & Bus Services",
  description:
    "Top-Rated Car Services in Miami. Affordable and reliable limo services for all occasions. Enjoy luxurious & comfortable rides with our professional chauffeurs.",
  openGraph: {
    title: "Car Services in Miami",
    description:
      "Top-Rated Car Services in Miami. Affordable and reliable limo services.",
  },
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

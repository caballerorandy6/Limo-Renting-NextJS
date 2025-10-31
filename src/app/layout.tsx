import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForOrganization } from "@/components/seo/JsonLdForOrganization";

export const metadata = genPageMetadata({
  title: "Car Services in Miami - Chauffeured Car, Limo & Bus Services",
  description:
    "Top-Rated Car Services in Miami. Affordable and reliable limo services for all occasions. Enjoy luxurious & comfortable rides with our professional chauffeurs.",
  pageRoute: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <JsonLdForOrganization />
        <Header />
        <div className="min-h-screen">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

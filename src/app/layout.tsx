import "./globals.css";
import Header from "@/components/layout/header/Header";
import ConditionalFooter from "@/components/layout/footer/ConditionalFooter";
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForOrganization } from "@/components/seo/JsonLdForOrganization";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

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
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/logo/logo.webp",
          logoPlacement: "inside",
        },
        variables: {
          colorPrimary: "#ffffff", // Blanco
          colorBackground: "#000000", // Negro puro
          colorInputBackground: "#000000", // Negro
          colorInputText: "#ffffff", // Blanco
          colorText: "#ffffff", // Blanco
          colorTextSecondary: "#a3a3a3", // gray-400
          colorDanger: "#ef4444", // Rojo (solo para errores)
          colorSuccess: "#10b981", // green-500
          colorWarning: "#f59e0b", // amber-500
          borderRadius: "0.5rem", // rounded-lg
          fontFamily: `${GeistSans.style.fontFamily}, sans-serif`,
          colorNeutral: "#ffffff", // Blanco
          colorShimmer: "#1a1a1a", // Casi negro
        },
        elements: {
          // Card general - FONDO NEGRO PURO
          card: "shadow-2xl border border-gray-800 bg-black",
          cardBox: "bg-black",

          // Logo
          logoImage: "h-12 w-auto brightness-100",
          logoBox: "h-16 flex items-center justify-center bg-black",

          // Header del modal
          headerTitle: "text-2xl font-bold text-white",
          headerSubtitle: "text-sm text-gray-400",
          headerBackButton: "text-white hover:text-gray-300",

          // Formularios
          formButtonPrimary:
            "bg-white hover:bg-gray-200 text-black font-medium py-3 transition-all duration-200 shadow-lg hover:shadow-white/20",
          formButtonReset:
            "bg-transparent border border-white text-white hover:bg-white hover:text-black",

          formFieldInput:
            "bg-black border-2 border-gray-800 text-white placeholder:text-gray-500 focus:border-white focus:ring-2 focus:ring-white/50 rounded-lg",
          formFieldLabel: "text-sm font-medium text-gray-300",
          formFieldAction: "text-white hover:text-gray-300",
          formFieldInputShowPasswordButton: "text-gray-400 hover:text-white",
          formFieldSuccessText: "text-green-500",
          formFieldErrorText: "text-red-500",
          formFieldWarningText: "text-amber-500",
          formFieldHintText: "text-gray-400",

          // Links y botones secundarios
          footerActionLink: "text-white hover:text-gray-300 font-medium",
          footerActionText: "text-gray-400",
          footerAction: "text-sm",
          identityPreviewEditButton: "text-white hover:text-gray-300",
          identityPreviewText: "text-white",

          // Social buttons - FONDO NEGRO
          socialButtonsBlockButton:
            "bg-black border-2 border-gray-800 hover:border-white text-white transition-all duration-200",
          socialButtonsBlockButtonText: "font-medium text-white",
          socialButtonsIconButton: "border-gray-800 hover:border-white",

          // Alternativas de autenticación
          alternativeMethodsBlockButton:
            "bg-black border-2 border-gray-800 hover:border-white text-white",

          // Dividers
          dividerLine: "bg-gray-900",
          dividerText: "text-gray-500 text-sm",

          // Footer
          footer: "bg-black",
          footerPages: "bg-black",

          // User button (avatar menu) - FONDO NEGRO
          userButtonPopoverCard: "shadow-2xl border border-gray-800 bg-black",
          userButtonPopoverActionButton: "hover:bg-gray-900 transition-colors text-white",
          userButtonPopoverActionButtonText: "text-white",
          userButtonPopoverActionButtonIcon: "text-gray-400",
          userButtonPopoverFooter: "border-t border-gray-900 bg-black",

          // Avatar
          avatarBox: "shadow-md ring-2 ring-white",
          avatarImage: "brightness-100",

          // Otros elementos
          otpCodeFieldInput:
            "bg-black border-2 border-gray-800 text-white focus:border-white",
          selectButton:
            "bg-black border-2 border-gray-800 text-white hover:border-white",
          selectSearchInput__countryCode:
            "bg-black border-2 border-gray-800 text-white",
          formResendCodeLink: "text-white hover:text-gray-300",

          // Internal card para modales internos
          modalContent: "bg-black border border-gray-800",
          modalBackdrop: "bg-black/80",

          // Badges y alertas
          badge: "bg-white text-black",
          alert: "bg-black border-2 border-gray-800 text-white",
          alertText: "text-white",
        },
      }}
    >
      <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
        <body
          className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        >
          {/* Google Maps API with Places library for autocomplete */}
          <Script
            id="google-maps-api"
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`}
            strategy="beforeInteractive"
          />
          <JsonLdForOrganization />
          <Header />
          <div className="min-h-screen">{children}</div>
          <Toaster />
          <ConditionalFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}

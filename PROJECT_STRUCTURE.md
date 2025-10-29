# 🚗 American Transportation & Limo Services - Project Structure

## 📋 Tech Stack

- **Framework:** Next.js 16.0.1 (App Router + Turbopack)
- **React:** 19.0.0-rc.1 with React Compiler
- **Language:** TypeScript 5.6.3
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** shadcn/ui + Radix UI
- **State Management:** Zustand 5.0.0-rc.2 with persistence
- **Forms:** React Hook Form 7.53.0 + Zod 3.23.8
- **Maps:** Google Maps API (@react-google-maps/api)
- **Animations:** Framer Motion 11.12.0
- **Email:** Resend 4.0.1
- **Font:** Geist Sans & Mono

## 📁 Project Structure

```
src/
├── actions/                    # 🆕 Server Actions (Next.js 16)
│   ├── contact.ts             # Contact form server action
│   ├── ride.ts                # Ride booking & route calculation
│   └── index.ts               # Centralized exports
│
├── app/                        # App Router
│   ├── (routes)/              # Route pages
│   │   ├── about/
│   │   ├── contacts/
│   │   ├── fleet/
│   │   ├── ride/
│   │   ├── services/
│   │   │   └── [id]/          # Dynamic service pages
│   │   └── reservations/
│   │
│   ├── api/                   # API Routes (being replaced by Server Actions)
│   │   ├── distance-duration/
│   │   ├── ride/
│   │   └── send/
│   │
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Home page
│   ├── robots.ts              # Dynamic robots.txt
│   ├── sitemap.ts             # Dynamic sitemap.xml
│   └── globals.css            # Global styles
│
├── components/
│   ├── features/              # 🆕 Feature-based components
│   │   ├── home/             # Home page components
│   │   │   ├── Hero.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── WhatWeOffer.tsx
│   │   │   ├── FeaturedVehicles.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   │
│   │   ├── fleet/            # Fleet page components
│   │   │   ├── FleetVideo.tsx
│   │   │   ├── Vehicles.tsx
│   │   │   ├── Vehicle.tsx
│   │   │   ├── FleetInfo.tsx
│   │   │   ├── arrays.ts
│   │   │   └── carouselArrays.ts
│   │   │
│   │   ├── services/         # Services components
│   │   │   ├── Services.tsx
│   │   │   ├── Service.tsx
│   │   │   ├── ServicesInfo.tsx
│   │   │   ├── ServicesSimpleAccordion.tsx
│   │   │   └── ServicesMultipleAccordion.tsx
│   │   │
│   │   ├── about/            # About page components
│   │   │   ├── AboutUs.tsx
│   │   │   ├── BookUsAbout.tsx
│   │   │   ├── WhyChooseUpAbout.tsx
│   │   │   └── IncrementNumber.tsx
│   │   │
│   │   ├── contact/          # Contact components
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactMap.tsx
│   │   │   └── ContactPoiMarkers.tsx
│   │   │
│   │   └── ride/             # Ride booking components
│   │       ├── SelectRide.tsx
│   │       ├── GetVehicles.tsx
│   │       ├── VehiclesSkeleton.tsx
│   │       └── CarouselSkeleton.tsx
│   │
│   ├── layout/               # 🆕 Layout components
│   │   ├── header/
│   │   │   └── Header.tsx
│   │   ├── footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── ContactInfoCard.tsx
│   │   │   └── QuickLinks.tsx
│   │   └── nav/
│   │       ├── Navbar.tsx
│   │       ├── MenuNavigation.tsx
│   │       ├── HamburgerMenu.tsx
│   │       ├── ContactMenu.tsx
│   │       ├── SocialMenu.tsx
│   │       └── Logo.tsx
│   │
│   ├── shared/               # 🆕 Shared/reusable components
│   │   ├── buttons/          # All button components
│   │   │   ├── BookNowButton.tsx
│   │   │   ├── LearnMoreButton.tsx
│   │   │   ├── ServiceOptionsButton.tsx
│   │   │   └── ...
│   │   │
│   │   ├── forms/            # Form components
│   │   │   ├── InputField.tsx
│   │   │   ├── CheckBoxField.tsx
│   │   │   ├── FormQuote.tsx
│   │   │   └── ErrorForm.tsx
│   │   │
│   │   ├── icons/            # SVG icons (50+ icons)
│   │   │   ├── CarIcon.tsx
│   │   │   ├── LocationIcon.tsx
│   │   │   └── ...
│   │   │
│   │   └── ui-common/        # Common UI components
│   │       ├── Heading.tsx
│   │       ├── MyCarousel.tsx
│   │       ├── MyDialog.tsx
│   │       ├── Circle.tsx
│   │       └── LimoImageMenu.tsx
│   │
│   ├── seo/                  # 🆕 SEO components
│   │   ├── JsonLdForOrganization.tsx
│   │   ├── JsonLdForBreadcrumb.tsx
│   │   └── JsonLdForService.tsx
│   │
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── ...
│
├── config/                    # 🆕 Configuration files
│   ├── site.ts               # Site-wide configuration
│   ├── services-data.ts      # Services data (11 services)
│   └── metadata.ts           # Legacy (can be removed)
│
├── hooks/                     # 🆕 Custom React Hooks
│   ├── useGoogleMaps.ts      # Google Maps loader
│   ├── useContactForm.ts     # Contact form logic
│   ├── useVehicleBooking.ts  # Booking logic
│   ├── useDebounce.ts        # Debounce utility
│   ├── useMediaQuery.ts      # Responsive design
│   └── index.ts              # Centralized exports
│
├── lib/                       # 🆕 Utilities & helpers
│   └── genPageMetadata.ts    # SEO metadata generator
│
├── stores/                    # 🆕 Zustand stores (renamed from store)
│   ├── rideInfoStore.ts      # Ride booking state (persisted)
│   ├── contactEmailStore.ts  # Contact form state
│   ├── openDialogStore.ts    # Dialog state
│   ├── openMenuStore.ts      # Menu state
│   ├── addStopStore.ts       # Stops management
│   ├── incrementNumberStore.ts
│   ├── sendingEmailButtonStore.ts
│   ├── nameAndFlagStore.ts
│   └── index.ts              # Centralized exports
│
└── types/                     # 🆕 TypeScript types (centralized)
    ├── seo.ts                # SEO types
    ├── home.ts               # Home feature types
    ├── fleet.ts              # Fleet feature types
    ├── services.ts           # Services types
    ├── about.ts              # About types
    ├── contact.ts            # Contact types
    ├── footer.ts             # Footer types
    ├── nav.ts                # Nav types
    ├── buttons.ts            # Button types
    ├── forms.ts              # Form types
    ├── ui-common.ts          # UI common types
    └── index.ts              # Centralized exports
```

## 🎯 Key Features

### 1. React 19 Features
- ✅ **React Compiler** enabled for automatic optimizations
- ✅ **Server Components** by default
- ✅ **Client Components** marked with "use client"
- ✅ Reduced bundle size with automatic memoization

### 2. Next.js 16 Features
- ✅ **Turbopack** for faster builds
- ✅ **Server Actions** for form handling
- ✅ **generateStaticParams** for 11 service pages
- ✅ **generateMetadata** for dynamic SEO
- ✅ **App Router** with nested layouts

### 3. SEO Optimization
- ✅ Dynamic **robots.txt** and **sitemap.xml**
- ✅ **JSON-LD** structured data (Organization, Services, Breadcrumbs)
- ✅ **Open Graph** and **Twitter Cards**
- ✅ Per-page metadata with keywords
- ✅ Canonical URLs
- ✅ Google Site Verification ready

### 4. State Management
- ✅ **Zustand** stores with localStorage persistence
- ✅ Type-safe with TypeScript
- ✅ Centralized exports from `@/stores`

### 5. Custom Hooks
- ✅ `useGoogleMaps` - Google Maps API loader
- ✅ `useContactForm` - Contact form logic
- ✅ `useVehicleBooking` - Booking management
- ✅ `useDebounce` - Debounce utility
- ✅ `useMediaQuery` - Responsive design helper

### 6. Server Actions
- ✅ `submitContactForm` - Email sending with Resend
- ✅ `calculateRoute` - Google Maps route calculation
- ✅ `submitRideBooking` - Ride booking submission

## 📦 Import Patterns

```typescript
// ✅ Types (centralized)
import { ReviewsProps, ServiceProps } from "@/types";

// ✅ Components (organized by category)
import Hero from "@/components/features/home/Hero";
import Header from "@/components/layout/header/Header";
import BookNowButton from "@/components/shared/buttons/BookNowButton";

// ✅ Hooks (custom)
import { useContactForm, useDebounce } from "@/hooks";

// ✅ Stores (Zustand)
import { useRideInfoStore, useContactEmailStore } from "@/stores";

// ✅ Server Actions
import { submitContactForm, calculateRoute } from "@/actions";

// ✅ Config
import { siteConfig, servicesMetadata } from "@/config/site";

// ✅ Utilities
import { genPageMetadata } from "@/lib/genPageMetadata";
```

## 🚀 Build Results

```
✓ Compiled successfully in 3.0s
✓ TypeScript checks passed
✓ All 26 pages generated

Route Summary:
- Static pages: 14
- SSG pages: 11 (services/[id])
- Dynamic API routes: 3
- robots.txt: ✓
- sitemap.xml: ✓
```

## 🔧 Environment Variables

```env
# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your-map-id

# Site Config
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code

# Email (Resend)
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=info@yourdomain.com
```

## 📚 Documentation Files

- `PROJECT_STRUCTURE.md` - This file
- `REACT_COMPILER.md` - React Compiler usage guide
- `README.md` - Getting started guide

## 🎨 Best Practices Implemented

1. ✅ **Feature-based architecture** for better scalability
2. ✅ **Centralized types** for consistency
3. ✅ **Server Actions** instead of API routes
4. ✅ **Custom hooks** for reusable logic
5. ✅ **Zustand** with persistence for state
6. ✅ **SEO-first** approach with structured data
7. ✅ **Type-safe** with TypeScript
8. ✅ **Accessible** with ARIA labels
9. ✅ **Responsive** with Tailwind CSS
10. ✅ **Optimized** with React Compiler

## 🔄 Migration Guide

### From old structure to new:
```typescript
// ❌ Old
import Hero from "@/components/my-components/home/Hero";
import { ReviewsProps } from "@/components/my-components/home/interfaces";

// ✅ New
import Hero from "@/components/features/home/Hero";
import { ReviewsProps } from "@/types";
```

---

**Last Updated:** October 28, 2025
**Next.js Version:** 16.0.1
**React Version:** 19.0.0-rc.1

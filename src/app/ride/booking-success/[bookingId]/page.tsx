import { Metadata } from "next";
import BookingSuccessContent from "@/components/features/ride/BookingSuccessContent";

type Params = Promise<{ bookingId: string }>;

/**
 * Generate Metadata for Booking Success Page
 * SEO optimized for confirmation pages
 */
export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const { bookingId } = params;

  return {
    title: `Booking Confirmed - ${bookingId} | Premium Limousine Service`,
    description: `Your luxury limousine booking has been confirmed. Confirmation number: ${bookingId}. Check your email for complete booking details and driver information.`,
    keywords: [
      "booking confirmation",
      "limousine reservation",
      "luxury car service",
      "ride confirmation",
      "airport transfer confirmation",
    ],
    robots: {
      index: false, // Don't index confirmation pages (private data)
      follow: false,
      nocache: true,
    },
    openGraph: {
      title: `Booking Confirmed - ${bookingId}`,
      description:
        "Your luxury limousine has been booked successfully. Check your confirmation details.",
      type: "website",
      siteName: "Premium Limousine Service",
    },
    twitter: {
      card: "summary",
      title: `Booking Confirmed - ${bookingId}`,
      description: "Your luxury limousine booking confirmation",
    },
  };
}

/**
 * Booking Success Page - Server Component
 *
 * Esta página es un Server Component que:
 * 1. Genera metadata dinámica SEO-optimizada
 * 2. Extrae el bookingId de los parámetros de la URL
 * 3. Renderiza el Client Component BookingSuccessContent
 *
 * El Client Component maneja:
 * - Estado de los datos de la reserva (conectar con store/backend)
 * - Interacciones del usuario
 * - Renderizado dinámico del contenido
 */
const BookingSuccessPage = async (props: { params: Params }) => {
  const params = await props.params;
  const { bookingId } = params;

  return <BookingSuccessContent bookingId={bookingId} />;
};

export default BookingSuccessPage;

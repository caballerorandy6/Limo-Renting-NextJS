import { useEffect, useState } from "react";

interface UseGoogleMapsOptions {
  apiKey: string;
  libraries?: string[];
}

/**
 * Custom hook for loading Google Maps API
 * Handles script loading and provides loading state
 *
 * @example
 * const { isLoaded, loadError } = useGoogleMaps({
 *   apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
 *   libraries: ['places', 'geometry']
 * });
 */
export function useGoogleMaps({ apiKey, libraries = [] }: UseGoogleMapsOptions) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already being loaded
    if (document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      // Wait for it to load
      const checkLoaded = setInterval(() => {
        if (window.google && window.google.maps) {
          setIsLoaded(true);
          clearInterval(checkLoaded);
        }
      }, 100);

      return () => clearInterval(checkLoaded);
    }

    // Load the script
    const script = document.createElement("script");
    const librariesParam = libraries.length > 0 ? `&libraries=${libraries.join(",")}` : "";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}${librariesParam}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      setLoadError(new Error("Failed to load Google Maps API"));
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts before script loads
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [apiKey, libraries]);

  return { isLoaded, loadError };
}

declare global {
  interface Window {
    google: typeof google;
  }
}

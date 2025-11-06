import { useEffect, useState } from "react";

/**
 * Custom hook for checking Google Maps API loading status
 *
 * IMPORTANT: Google Maps script is loaded globally in layout.tsx
 * This hook only CHECKS if the API is loaded, it does NOT load the script.
 *
 * @example
 * const { isLoaded, loadError } = useGoogleMaps();
 */
export function useGoogleMaps() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Wait for Google Maps to load (loaded in layout.tsx)
    const checkLoaded = setInterval(() => {
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        clearInterval(checkLoaded);
      }
    }, 100);

    // Timeout after 10 seconds
    const timeout = setTimeout(() => {
      if (!window.google || !window.google.maps) {
        setLoadError(new Error("Google Maps API failed to load within 10 seconds"));
        clearInterval(checkLoaded);
      }
    }, 10000);

    return () => {
      clearInterval(checkLoaded);
      clearTimeout(timeout);
    };
  }, []);

  return { isLoaded, loadError };
}

declare global {
  interface Window {
    google: typeof google;
  }
}

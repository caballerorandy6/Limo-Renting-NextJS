"use client";

import { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PlaceAutocompleteInputProps {
  id?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  className?: string;
}

/**
 * PlaceAutocompleteInput - Google Maps Place Autocomplete
 * Uses the classic Autocomplete API
 */
const PlaceAutocompleteInput = forwardRef<
  HTMLInputElement,
  PlaceAutocompleteInputProps
>(({ id, name, placeholder, value, onChange, onBlur, className }, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isInitializedRef = useRef(false);

  // Initialize the autocomplete input once
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for Google Maps API to load
    const initAutocomplete = () => {
      if (
        typeof google === "undefined" ||
        !google.maps ||
        !google.maps.places
      ) {
        setTimeout(initAutocomplete, 100);
        return;
      }

      if (isInitializedRef.current) return;
      isInitializedRef.current = true;

      console.log(
        "🗺️ Initializing Google Maps Autocomplete for:",
        id || name
      );

      const input = document.createElement("input");
      input.type = "text";
      input.name = name;
      if (id) input.id = id;
      if (placeholder) input.placeholder = placeholder;
      input.autocomplete = "off";

      input.className = cn(
        "flex h-9 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:cursor-not-allowed disabled:opacity-50 bg-white hover:bg-gray-100 rounded mb-4 font-mono",
        className
      );

      container.appendChild(input);
      inputRef.current = input;

      // Initialize Autocomplete API
      const autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["geocode", "establishment"],
        fields: ["formatted_address", "geometry", "name"],
      });

      // Handle place selection
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        let selectedAddress = "";
        if (place.formatted_address) {
          selectedAddress = place.formatted_address;
        } else if (place.name) {
          selectedAddress = place.name;
        }

        if (selectedAddress) {
          console.log("📍 Place selected:", selectedAddress);
          onChange(selectedAddress);
          input.value = selectedAddress;
        }
      });

      // Handle manual typing
      const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        onChange(target.value);
      };

      input.addEventListener("input", handleInput);

      // Handle blur event
      if (onBlur) {
        input.addEventListener("blur", onBlur);
      }

      autocompleteRef.current = autocomplete;

      // Set ref if provided
      if (ref) {
        if (typeof ref === "function") {
          ref(input);
        } else {
          ref.current = input;
        }
      }
    };

    initAutocomplete();

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
      if (inputRef.current) {
        inputRef.current.remove();
        inputRef.current = null;
      }
      isInitializedRef.current = false;
    };
  }, []); // ✅ Solo inicializa una vez

  // Sync external value changes to the input (without recreating it)
  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== value) {
      inputRef.current.value = value;
    }
  }, [value]); // ✅ Solo actualiza el valor del input existente

  return <div ref={containerRef} className="w-full" />;
});

PlaceAutocompleteInput.displayName = "PlaceAutocompleteInput";

export default PlaceAutocompleteInput;

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

const PlaceAutocompleteInput = forwardRef<
  HTMLInputElement,
  PlaceAutocompleteInputProps
>(({ id, name, placeholder, value, onChange, onBlur, className }, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteInstanceRef = useRef<google.maps.places.Autocomplete | null>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement) return;

    // Clean up previous instance if exists
    if (autocompleteInstanceRef.current) {
      google.maps.event.clearInstanceListeners(autocompleteInstanceRef.current);
      autocompleteInstanceRef.current = null;
      isInitializedRef.current = false;
    }

    // Wait for Google Maps API to load
    const initAutocomplete = () => {
      if (typeof google === "undefined" || !google.maps || !google.maps.places) {
        setTimeout(initAutocomplete, 100);
        return;
      }

      // Prevent double initialization
      if (isInitializedRef.current) return;
      isInitializedRef.current = true;

      console.log("🗺️ Initializing Google Maps Autocomplete for:", id || name);

      // Initialize Google Maps Autocomplete
      const autocomplete = new google.maps.places.Autocomplete(inputElement, {
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
          // Update DOM directly for visual feedback
          if (inputElement) {
            inputElement.value = selectedAddress;
          }
        }
      });

      autocompleteInstanceRef.current = autocomplete;
    };

    initAutocomplete();

    // Handle manual typing
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      onChange(target.value);
    };

    inputElement.addEventListener("input", handleInput);

    return () => {
      inputElement.removeEventListener("input", handleInput);
      if (autocompleteInstanceRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteInstanceRef.current);
        autocompleteInstanceRef.current = null;
      }
      isInitializedRef.current = false;
    };
  }, [id, name, onChange]);

  return (
    <input
      ref={(el) => {
        inputRef.current = el;
        if (ref) {
          if (typeof ref === "function") {
            ref(el);
          } else {
            ref.current = el;
          }
        }
      }}
      id={id}
      type="text"
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      onBlur={onBlur}
      className={cn(
        "flex h-9 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-white hover:bg-gray-100 rounded mb-4 font-mono",
        className
      )}
      autoComplete="off"
    />
  );
});

PlaceAutocompleteInput.displayName = "PlaceAutocompleteInput";

export default PlaceAutocompleteInput;

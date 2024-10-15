import { create } from "zustand";

import { Country } from "@/lib/interfaces";
import { CountryStore } from "@/lib/interfaces";

export const useNameAndFlagStore = create<CountryStore>((set) => ({
  countries: [],
  fetchCountries: async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok) {
        throw new Error("Failed to fetch countries data");
      }

      const data: Country[] = await response.json();

      // const countryData = await data.map((country) => ({
      //   name: country?.name?.common,
      //   flag: country?.flag,
      // }));

      set({ countries: data });
    } catch (error) {
      console.log("Error fetching countries data", error);
    }
  },
}));

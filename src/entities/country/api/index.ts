import { CountryData } from "../types";

export const generateCountriesData = (): CountryData[] => {
  return [
    { country: "Serbia", percentage: 35.7 },
    { country: "USA", percentage: 9.6 },
    { country: "Croatia", percentage: 7.7 },
    { country: "Bosnia", percentage: 6.5 },
    { country: "Brazil", percentage: 4.8 }
  ];
}; 
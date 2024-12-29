import { faker } from "@faker-js/faker";
import { ViewData } from "../types";

export const generateViewsData = (): ViewData[] => {
  const months = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь"];
  return months.map((month) => ({
    month,
    views: faker.number.int({ min: 10, max: 20 }),
  }));
};

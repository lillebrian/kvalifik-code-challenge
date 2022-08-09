import { getYear } from "date-fns";
import { isToday } from "date-fns/esm";
import { FC } from "react";
import { datesData } from "../../types/types.d";

// calucates the days in the month shown in the 7x5 grid.
// uses the method of datefns going to next month auto
const getMonthDates = (monthNumber: number) => {
  const year: number = getYear(new Date());
  const startOfMonth: number = new Date(year, monthNumber, 0).getDay();
  let currentMonthIndex: number = 0 - startOfMonth;

  let dates: Date[] = [...Array(35)].map(() => {
    currentMonthIndex++;
    return new Date(year, monthNumber, currentMonthIndex);
  });

  return dates;
};

export default getMonthDates;

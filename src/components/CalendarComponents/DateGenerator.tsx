import { getDate, getYear } from "date-fns";
import React, { useState } from "react";
import { IdisplayedDates } from "../../types/types.d";

// calucates the days in the month shown in the 7x5 grid.
// uses the method of datefns going to next month auto
export function getMonthDates (monthNumber: number) {
  // const [yeartest, setYeartest] = useState<number>(new Date().getFullYear());KC
  let year: number = new Date().getFullYear()
  const startOfMonth: number = new Date(year, monthNumber, 0).getDay();
  let currentMonthIndex: number = 0 - startOfMonth;
  let date: Date;

  let dates: Date[] = [...Array(35)].map(() => {
    currentMonthIndex++;
    date = new Date(year, monthNumber, currentMonthIndex);    
    return date;
  });

  return { dates: dates, year: year };
};

export default getMonthDates;

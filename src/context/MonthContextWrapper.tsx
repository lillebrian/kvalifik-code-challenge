import React, { useState } from "react";
import MonthContext from "./MonthContext";

export default function MonthContextWrapper({ children }: any) {
  /*  
  Setting the usestate hook with the dedicated month number to render from and the 
   corresponding usestate setter method to the context created 
   DEFAULT VALUE: CURRENT MONTH
   */
  const [monthIndex, setMonthIndex] = useState<number>(new Date().getMonth());
  return (
    <MonthContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </MonthContext.Provider>
  );
}

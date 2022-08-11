import React, { useState } from "react";
import { IEventContext, IMonthContext } from "../types/types.d";
import EventContext from "./EventContext";

export default function EventContextWrapper({ children }: any) {
  /*  
  Setting the usestate hook with the dedicated month number to render from and the 
   corresponding usestate setter method to the context created 
   DEFAULT VALUE: CURRENT MONTH
   */
  const [displayEvent, setDisplayEvent] = useState<boolean>(false);
  return (
    <EventContext.Provider value={{ displayEvent, setDisplayEvent }}>
      {children}
    </EventContext.Provider>
  );
}

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
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  return (
    <EventContext.Provider value={{ displayCreateEvent: displayEvent, setDisplayEvent, selectedDate: selectedDate, setSelectedDate}}>
      {children}
    </EventContext.Provider>
  );
}

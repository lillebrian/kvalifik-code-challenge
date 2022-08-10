import { Box } from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";
import {} from "date-fns";
import MonthContext from "../context/MonthContext";
import getMonthDates from "./CalendarComponents/DateGenerator";
import CalendarHeader from "./CalendarComponents/CalendarHeader";
import MonthRender from "./CalendarComponents/MonthRenderComponent";
import { IMonthContext } from "../types/types.d";

type Props = {
  param?: string;
};

const Calendar: FC<Props> = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [displayedDates, setdisplayedDates] = useState<Date[]>(
    getMonthDates(currentDay.getMonth())
  );

  const { monthIndex } = useContext<IMonthContext>(MonthContext);

  
  /* Here the magic happens. Whenever the monthindex is changed (global contex)
  the month corresponding to the new monthindex number is generated and set to
  the displayed month. Then that months data gets passed down to components to 
  render. boom shakala */
  useEffect(() => {
    setdisplayedDates(getMonthDates(monthIndex))
  }, [monthIndex])
  
  console.table(displayedDates);
  console.log("NUVÆRENDE DAG: ", currentDay);

  return (
    <Box
      w="500px"
      bg="white"
      h="400px"
      borderRadius="13px"
      boxShadow="0 0 99px 0px rgba(0, 0, 0, 0.04)"
      mb="10"
      display=""
      // justifyContent='center'
      alignItems="center"
    >
      {/* Headline */}
      <CalendarHeader />

      {/* showing the individual days */}
      <MonthRender monthData={displayedDates} />
    </Box>
  );
};

export default Calendar;

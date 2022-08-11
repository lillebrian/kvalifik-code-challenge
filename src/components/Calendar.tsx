import { Box, Grid, GridItem } from "@chakra-ui/react";
import { getMonth } from "date-fns";
import { FC, useContext, useEffect, useState } from "react";
import EventContext from "../context/EventContext";
import MonthContext from "../context/MonthContext";
import {
  IdisplayedDates,
  IEventContext,
  IMonthContext
} from "../types/types.d";
import CalendarHeader from "./CalendarComponents/CalendarHeader";
import getMonthDates from "./CalendarComponents/DateGenerator";
import MonthRender from "./CalendarComponents/MonthRenderComponent";
import EventFormComponent from "./EventComponents/EventFormComponent";

type Props = {
  param?: string;
};

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeekDays = () => {
  return (
    <Grid
      templateColumns="repeat(7,1fr)"
      bg="teal.500"
      w="100%"
      fontSize="md"
      h="5%"
    >
      {[...Array(7)].map((e: any, i) => (
        <GridItem
          textAlign="center"
          textColor="white"
          h="100%"
          w="100%"
          key={i}
        >
          {weekdays[i]}
        </GridItem>
      ))}
    </Grid>
  );
};

const Calendar: FC<Props> = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [displayedDates, setdisplayedDates] = useState<IdisplayedDates>(
    getMonthDates(currentDay.getMonth())
  );
  // const [displayedDates, setdisplayedDates] = useState<IdisplayedDates>({
  //   dates: getMonthDates(currentDay.getMonth()),
  //   year: currentDay.getFullYear()
  // });

  const { monthIndex } = useContext<IMonthContext>(MonthContext);
  const { displayEvent } = useContext<IEventContext>(EventContext);
  /*
  Here the magic happens. Whenever the monthindex is changed (global contex)
  the month corresponding to the new monthindex number is generated and set to
  the displayed month. Then that months data gets passed down to components to 
  render. boom shakala */
  useEffect(() => {
    setdisplayedDates(getMonthDates(monthIndex));
  }, [monthIndex]);

  console.table(displayedDates.dates);
  console.log(displayedDates.year);
  // console.log("NUVÆRENDE DAG: ", currentDay);

  return (
    <Box>
      {displayEvent && <EventFormComponent />}
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
        <CalendarHeader
          year={displayedDates.year as number}
          month={getMonth(monthIndex)}
        />
        {/* Showing Weekdays */}
        <WeekDays />
        {/* showing the individual days */}
        <MonthRender dates={displayedDates.dates} />
      </Box>
    </Box>
  );
};

export default Calendar;

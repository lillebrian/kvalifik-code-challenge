import { Box} from "@chakra-ui/react";
import { FC, useState } from "react";
import {} from "date-fns";
import getMonthDates from "./CalendarComponents/DateGenerator";
import CalendarHeader from "./CalendarComponents/CalendarHeader";
import MonthRender from "./CalendarComponents/MonthRenderComponent";

type Props = {
  param?: string;
};

const Calendar: FC<Props> = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [displayedDates, setdisplayedDates] = useState<Date[]>(
    getMonthDates(currentDay.getMonth())
  );

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

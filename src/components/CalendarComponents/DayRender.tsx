import { Box, GridItem } from "@chakra-ui/react";
import React, { useContext } from "react";
import EventContext from "../../context/EventContext";
import MonthContext from "../../context/MonthContext";
import { IEventContext, IMonthContext } from "../../types/types.d";

interface days {
  day: Date;
  counter: number;
}

function genericStyle(color: string, counter: number) {
  return {
    bg: color,
    borderRight: (counter%7 != 0) ? "1px" : "0",
    borderBottomLeftRadius: (counter === 29) ? "13px" : "0",
    borderBottomRightRadius: (counter === 35) ? "13px" : "0",
    borderTop: "1px",
    borderColor: "gray.100",
    textColor: "gray.600",
    w: "100%",
    h: ""
  };
}

/* Renders the individual dates in the month shown */
const DayRender = ({ day, counter}: days) => {
  //  console.log("DAGEN: " ,day)

  const { monthIndex } = useContext<IMonthContext>(MonthContext);
  const { setDisplayEvent, setSelectedDate } = useContext<IEventContext>(EventContext);

  const validDayInMonth: boolean =
    day.getMonth() ===
    new Date(new Date().getFullYear(), monthIndex).getMonth();
  const isCurrentDay: boolean =
    day.getDate() === new Date().getDate() &&
    day.getMonth() === new Date().getMonth();
  const color: string = validDayInMonth
    ? isCurrentDay
      ? "telegram.100"
      : "white"
    : "gray.400";

  return validDayInMonth ? (
    <GridItem
      __css={genericStyle(color, counter)}
      pos="relative"
      _hover={{ bg: "gray.100" }}
      onClick={() => setSelectedDate(day)}
      // onClick={() => setDisplayEvent(true)}
      key={day.getTime()}
    >
      <Box paddingRight="1" pos="absolute" right="0" bottom="0">
        {day.getDate()}.
      </Box>
    </GridItem>
  ) : (
    <GridItem
      __css={genericStyle(color, counter)}
      pos="relative"
      opacity="50%"
      key={day.getTime()}
    >
      <Box paddingRight="1" pos="absolute" right="0" bottom="0">
        {day.getDate()}.
      </Box>
    </GridItem>
  );
};

export default DayRender;

import { Box, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { FC, ReactElement, useEffect, useState } from "react";
import {
  format,
  addDays,
  endOfMonth,
  parse,
  startOfMonth,
  getDaysInMonth,
  getDay,
  addMonths,
  getMonth,
  isSameMonth,
} from "date-fns";

import { Month } from "../types/types.d";
import getMonthDates from "./CalendarComponents/DateGenerator";
import CalendarHeader from "./CalendarComponents/CalendarHeader";
import MonthRender from "./CalendarComponents/MonthRenderComponent";

type Props = {
  param?: string;
};

interface datesData {
  monthStart: Date;
  monthEnd: Date;
  // currentDay: Date;
  daysInMonth: number;
}

const Calendar: FC<Props> = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [displayedMonth, setDisplayedMonth] = useState<Month>(
    getMonthDates(currentDay.getMonth())
  );
  console.table(displayedMonth)

  // const {monthToRender} = getMonthDates(currentDay.getMonth());

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
      <MonthRender month={displayedMonth} />

      {/* Showing what day it is */}

      {/* showing the individual days */}
      <Box h="90%" w="100%" bg="teal.100" color="white">
        <Grid templateColumns="repeat(7,1fr)" gap="0" h="100%" padding="0.5">
          {dates.map((day, i) => {
            return (
              <GridItem
                bg={
                  isSameMonth(day.getDate(), displayedMonth)
                    ? "white"
                    : "gray.300" || day.getDate() === currentDay.getDate()
                    ? "telegram.50"
                    : "white"
                }
                borderRadius="md"
                border="1px"
                borderColor="teal.400"
                textColor="black"
                textAlign="center"
                key={i + 1}
                _hover={{ bg: "gray.50" }}
                onClick={() => alert("Pressed")}
              >
                {day.getDate().toString()}
                {console.log(day.getDate())}
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calendar;

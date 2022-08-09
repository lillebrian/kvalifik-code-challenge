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

import { datesData } from "../types/types.d";
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
  console.log("NUVÆRENDE DAG: ", currentDay)

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

      {/* Showing what day it is */}

      {/* showing the individual days */}

      <MonthRender monthData={displayedDates} />
      
      {/* <Grid templateColumns="repeat(7,1fr)" gap="0" h="100%" padding="0.5">
          {displayedDates.map((day, i) => {
            return (
              <GridItem
                bg={
                  day.getDate() === currentDay.getDate()
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
        </Grid>*/}
    </Box>
  );
};

export default Calendar;

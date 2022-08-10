import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { getDate, getMonth, getYear, setMonth, format } from "date-fns";

import React, { useContext, useEffect, useState } from "react";
import MonthContext from "../../context/MonthContext";

interface data {
  year: number;
  month: number;
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CalendarHeader = ({ year, month }: data) => {
  const { monthIndex, setMonthIndex } = useContext(MonthContext);
  const [displayedHeader, setDisplayedHeader] = useState(
    monthNames[monthIndex]
  );
  const currentDateYear: number = new Date().getFullYear()
  
  
  function changeMonth(direction: string) {
    const d: number = direction === "forward" ? 1 : -1;
    setMonthIndex(monthIndex + d);
  }

  useEffect(() => {
    setDisplayedHeader(monthNames[monthIndex]);
  }, [monthIndex]);

  return (
    
    <Box
      textAlign="center"
      fontSize="2xl"
      w="100%"
      bg="teal.500"
      color="white"
      display="flex"
      justifyContent="center"
    >
      <IconButton
        aria-label={"Next Month"}
        colorScheme="teal"
        icon={<ArrowBackIcon />}
        onClick={() => changeMonth("back")}
      />

      <Box>
        {/* Weird trick - keeps counting up the years as well (8 + 5 = 13 (which is august to january)) */}
        {format(new Date(currentDateYear, monthIndex), "MMMM yyyy")}
      </Box>

      <IconButton
        aria-label={"Next Month"}
        colorScheme="teal"
        icon={<ArrowForwardIcon />}
        onClick={() => {
          changeMonth("forward");
        }}
      />
    </Box>
  );
};

export default CalendarHeader;

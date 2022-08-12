import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Center, IconButton, Text } from "@chakra-ui/react";
import { format } from "date-fns";

import { useContext, useEffect, useState } from "react";
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
  const currentDateYear: number = new Date().getFullYear();
  const formatYear = format(new Date(currentDateYear, monthIndex), "yyyy");
  const formatMonth = format(new Date(currentDateYear, monthIndex), "MMM");

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
      h="10%"
      bg="white"
      display="flex"
      borderRadius="13px"
      justifyContent="space-between"
      alignItems="center"
      padding="5"
      paddingTop="3"
      paddingBottom="0"
    >
      <Box display="flex" gap="2.5" padding="0">
        {/* Weird trick - keeps counting up the years as well (8 + 5 = 13 (which is august to january)) */}
        <Text fontWeight="bold">{formatMonth}</Text>
        <Text>{formatYear}</Text>
      </Box>

      <Center display="flex" gap="2.5" padding="0" paddingBottom="0">
        <IconButton
          isRound={true}
          size="sm"
          aria-label={"Next Month"}
          colorScheme="purple"
          icon={<ArrowBackIcon />}
          onClick={() => changeMonth("back")}
        />
        <Box alignSelf="" fontSize="large" color="purple" fontWeight="bold">
          Today
        </Box>
        <IconButton
          isRound={true}
          size="sm"
          aria-label={"Next Month"}
          colorScheme="purple"
          icon={<ArrowForwardIcon />}
          onClick={() => {
            changeMonth("forward");
          }}
        />
      </Center>
    </Box>
  );
};

export default CalendarHeader;

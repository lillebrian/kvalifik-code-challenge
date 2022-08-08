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
} from "date-fns";
import { count } from "console";
import { getValue } from "@testing-library/user-event/dist/utils";

type Props = {
  param?: string;
};

interface dates {
  monthStart: Date;
  monthEnd: Date;
  currentDay: Date;
  daysInMonth: number;
}

const Calendar: FC<Props> = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [monthToRender, setMonthToRender] = useState<dates>({
    currentDay: currentDay,
    monthStart: startOfMonth(currentDay),
    monthEnd: endOfMonth(currentDay),
    daysInMonth: getDaysInMonth(currentDay)
  });
  
  const {monthStart, monthEnd, daysInMonth} = monthToRender

  
  
  function changeMonth() {
    return undefined
  }
  

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
        />

        <Box>Calendar</Box>

        <IconButton
          aria-label={"Next Month"}
          colorScheme="teal"
          icon={<ArrowForwardIcon />}
          onClick={changeMonth()}
        />
      </Box>

      {/* Showing what day it is */}
      <Box>
        <Grid templateColumns="repeat(7,1fr)" padding="">
          {days.map((day, i) => (
            <GridItem
              textAlign="center"
              textColor="white"
              fontSize="lg"
              fontWeight="normal"
              bg="teal.200"
              key={i}
            >
              {day}
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* showing the individual days */}
      <Box h="90%" w="100%" bg="teal.100" color="white">
        <Grid templateColumns="repeat(7,1fr)" gap="0" h="100%" padding="0.5">
          {[...Array(daysInMonth)].map((x, i) => (
            <GridItem
              bg={i + 1 === currentDay.getTime() ? "telegram.100" : "white"}
              borderRadius="md"
              border="1px"
              borderColor="teal.400"
              textColor="black"
              textAlign="center"
              key={i + 1}
              _hover={{ bg: "gray.50" }}
              onClick={() => alert("Pressed")}
            >
              {format(addDays(monthStart, i), "dd/MM")}
              {console.log(currentDay.getDay() + i)}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calendar;

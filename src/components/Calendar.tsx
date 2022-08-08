import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
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
}


const Calendar: FC<Props> = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [monthStartDay, setMonthStartDay] = useState<Date>(startOfMonth(currentDay));
  const [monthEndDay, setMonthEndDay] = useState<Date>(endOfMonth(currentDay));
  const [monthToRender, setMonthToRender] = useState<dates>({
    currentDay: currentDay,
    monthStart: monthStartDay,
    monthEnd: monthEndDay,
  });
  const start: number = getDay(monthStartDay);

  useEffect(() => {
    console.log("CURRENT DAY : " + currentDay);
    console.log("START OF MONTH : " + monthStartDay);
    console.log("END OF MONTH : " + monthEndDay);
    console.log("END OF MONTH : " + format(monthStartDay, "dd/MM"));
  }, []);

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
        bg="teal.400"
        color="white"
      >
        Calendar
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
            >
              {day}
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* showing the individual days */}
      <Box h="90%" w="100%" bg="teal.100" color="white">
        <Grid templateColumns="repeat(7,1fr)" gap="0.5" h="100%" padding="0.5">
          {[...Array(getDaysInMonth(currentDay))].map((x, i) => (
            <GridItem
              bg={(i+1 === currentDay.getDate()) ? 'telegram.50' : 'white'}
              borderRadius="md"
              border="1px"
              borderColor="teal.400"
              textColor="black"
              textAlign="center"
              
              key={i + 1}
              _hover={{ bg: "gray.50" }}
              onClick={() => alert("Pressed")}
            >
              {format(addDays(monthStartDay, i), "dd/MM")}
              {console.log(start + i)}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calendar;

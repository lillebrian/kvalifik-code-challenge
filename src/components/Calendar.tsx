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

const Testdata = [
  { date: new Date(2022, 1, 14) },
  { date: new Date(2022, 1, 15) },
  { date: new Date(2022, 1, 16) },
  { date: new Date(2022, 1, 17) },
  { date: new Date(2022, 1, 18) },
  { date: new Date(2022, 1, 19) },
  { date: new Date(2022, 1, 20) },
  { date: new Date(2022, 1, 21) },
  { date: new Date(2022, 1, 22) },
];

interface dates {
  monthStart: Date;
  monthEnd: Date;
  currentDay: Date;
}

const renderDates = ({ currentDay, monthStart }: dates) => {
  let days: any = [];
  //convert to number
  const start: number = getDay(monthStart);

  console.log("dage i måned: " + getDaysInMonth(currentDay));

  //rendering grid cells
  for (let index = 0; index < getDaysInMonth(currentDay); index++) {
    days.push(
      <Box
        bg="white"
        border="1px"
        borderColor="black"
        textColor="black"
        key={index + 1}
      >
        {format(start + index, "dd/mm")}
        {console.log(start + index)}
      </Box>
    );
  }

  return <>{days}</>;
};

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
              bg="white"
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

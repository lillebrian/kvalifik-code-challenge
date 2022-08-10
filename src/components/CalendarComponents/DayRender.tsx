import { GridItem } from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useContext } from "react";
import MonthContext from "../../context/MonthContext";
import { IMonthContext } from "../../types/types.d";

interface days {
  day: Date;
}

/* Renders the individual dates in the month shown */
const DayRender = ({ day }: days) => {
  //  console.log("DAGEN: " ,day)

  const { monthIndex } = useContext<IMonthContext>(MonthContext);

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
      bg={color}
      borderRadius="sm"
      border="1px"
      borderColor="teal.400"
      textColor="black"
      textAlign="center"
      _hover={{ bg: "gray.50" }}
      onClick={() => alert("Pressed")}
      key={day.getTime()}
    >
      {day.getDate()}
    </GridItem>
  ) : (
    <GridItem
      bg={"gray.300"}
      borderRadius="sm"
      border="1px"
      borderColor="teal.400"
      textColor="black"
      textAlign="center"
      opacity="50%"
      key={day.getTime()}
    >
      {day.getDate()}
    </GridItem>
  );
};

export default DayRender;

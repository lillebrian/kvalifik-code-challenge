import { GridItem } from "@chakra-ui/react";
import React from "react";

interface days {
  day: Date;
}


const DayRender = ({ day }: days) => {
   console.log("DAGEN: " ,day)
  return (
    <GridItem
      bg={day.getDate() === new Date().getDate() ? "telegram.50" : "white"}
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
  );
};

export default DayRender;

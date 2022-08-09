import { GridItem } from "@chakra-ui/react";
import React from "react";

type test = {};

const DayRender = (day:any, keyi:any) => {
  return (
    <GridItem
      textAlign="center"
      textColor="white"
      fontSize="lg"
      fontWeight="normal"
      bg="teal.200"
      key={keyi}
    >
      {day}
    </GridItem>
  );
};

export default DayRender;

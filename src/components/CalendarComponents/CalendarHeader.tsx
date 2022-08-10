import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

import React, { useContext, useState } from "react";
import MonthContext from "../../context/MonthContext";

type Props = {};

const CalendarHeader = (props: Props) => {
  const { monthIndex, setMonthIndex } = useContext(MonthContext);

  function changeMonth(direction: string) {
    const d: number = direction === "forward" ? 1 : -1;
    setMonthIndex(monthIndex + d);
  }

  return (
    <>
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
          onClick={() => changeMonth("forward")}
        />

        <Box> </Box>

        <IconButton
          aria-label={"Next Month"}
          colorScheme="teal"
          icon={<ArrowForwardIcon />}
          onClick={() => {
            changeMonth("backwards");
          }}
        />
      </Box>
    </>
  );
};

export default CalendarHeader;

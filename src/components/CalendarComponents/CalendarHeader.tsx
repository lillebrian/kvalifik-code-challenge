import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

import React from "react";

type Props = {};

const CalendarHeader = (props: Props) => {
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
          onClick={(e) => {}}
        />

        <Box>FIX </Box>

        <IconButton
          aria-label={"Next Month"}
          colorScheme="teal"
          icon={<ArrowForwardIcon />}
          onClick={(e) => {}}
        />
      </Box>
    </>
  );
};

export default CalendarHeader;

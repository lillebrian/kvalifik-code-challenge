import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { FC } from "react";
import { Month } from "../../types/types.d";
import DayRender from "./DayRender";

const MonthRender = ({monthToRender} : Month): JSX.Element => {
  return (
    <Box>
      <Grid templateColumns="repeat(7,1fr)" padding="">
        {monthToRender.map((day, i) => (
          <DayRender day={day} />
        ))}
      </Grid>
    </Box>
  );
};

export default MonthRender;

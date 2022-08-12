import { Box, Grid } from "@chakra-ui/react";
import { datesData, IdisplayedDates } from "../../types/types.d";
import DayRender from "./DayRender";

const MonthRender = ({ dates }: IdisplayedDates) => {
  return (
    <Box h="80%" w="100%">
      <Box></Box>
      <Grid
        templateColumns="repeat(7,1fr)"
        h="100%"
        padding="0"
        paddingTop="0"
      >
        {dates.map((day, i) => (
          <DayRender day={day} key={i} counter={i+1} />
        ))}
      </Grid>
    </Box>
  );
};

export default MonthRender;

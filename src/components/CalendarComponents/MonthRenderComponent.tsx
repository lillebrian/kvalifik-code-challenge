import { Box, Grid } from "@chakra-ui/react";
import { datesData } from "../../types/types.d";
import DayRender from "./DayRender";

const MonthRender = ({ monthData }: datesData) => {

  
  return (
    <Box h="90%" w="100%" bg="teal.100" color="white">
      <Grid templateColumns="repeat(7,1fr)" gap="0" h="100%" padding="0.5">
        {monthData.map((day, i) => (
          <DayRender day={day} key={i} />
        ))}
      </Grid>
    </Box>  
  );
};

export default MonthRender;

import { Box, Center } from "@chakra-ui/react";
import Calendar from "./components/Calendar";
import Events from "./components/Events";
import EventContextWrapper from "./context/EventContextWrapper";
import MonthContextWrapper from "./context/MonthContextWrapper";

function App() {
  return (
    <Box bg="#F4F4F4" w="100%" h="100vh" p="10">
      <Center>
        <Box>
          <EventContextWrapper>
            <MonthContextWrapper>
              <Calendar />
              <Events />
            </MonthContextWrapper>
          </EventContextWrapper>
        </Box>
      </Center>
    </Box>
  );
}

export default App;

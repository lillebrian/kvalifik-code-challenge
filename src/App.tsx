import { Box, Center } from "@chakra-ui/react"
import Calendar from "./components/Calendar"
import Events from "./components/Events"
import MonthContextWrapper from "./context/MonthContextWrapper";

function App() {
  return (
    <Box
      bg='#F4F4F4'
      w='100%'
      h='100vh'
      p='10'
    >
      <Center>
        <Box>
          <MonthContextWrapper>
            <Calendar/>
            <Events/>
          </MonthContextWrapper>
        </Box>
      </Center>
    </Box>
  );
}

export default App;

import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import EventContext from "../context/EventContext";
import { IEventContext } from "../types/types.d";

type Props = {
  param?: string;
};

interface EventData {
  eventName: string;
  eventDate: Date;
}

const Events: FC<Props> = () => {
  const [events, setEvents] = useState<EventData[]>([
    {
      eventName: "TEST",
      eventDate: new Date(),
    },
    {
      eventName: "TEST 2",
      eventDate: new Date(),
    },
  ]);
  const { selectedDate } = useContext<IEventContext>(EventContext);

  function handleSubmit(e: any) {
    setEvents((prev) => {
      return [...prev, { eventName: e.eventName, eventDate: selectedDate }];
    });
  }
  function handleDelete(e: EventData) {
    console.log("inside delete")
    setEvents((prev) =>
      prev.filter((eventToRemove) => {
        return eventToRemove.eventName !== e.eventName;
      })
    );
  }

  return (
    <Box
      w="500px"
      borderRadius="13px"
      boxShadow="0 0 99px 0px rgba(0, 0, 0, 0.04)"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="100%">
        <FormControl
          h="100%"
          display="flex"
          gap="2"
          
        >
          <Input bg="white" placeholder="Event name" name="eventName" />
          <Button bg="purple" color="white" onClick={(e) => handleSubmit(e)}>
            {" "}
            +{" "}
          </Button>
        </FormControl>
      </Box>

      {events.map((e) => {
        return (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="500px"
            h="50px"
            bg="white"
            borderRadius="13px"
            marginTop="3"
          >
            {console.log("inside event render")}
            {e.eventName}
            {console.log(e.eventName)}
            <Button onClick={() => handleDelete(e)}> X </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default Events;

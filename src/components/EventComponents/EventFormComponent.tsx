import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import EventContext from "../../context/EventContext";
import { IEventContext } from "../../types/types.d";

type Props = {};

const EventFormComponent = (props: Props) => {
  const [eventName, setEventName] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");

  const { displayCreateEvent: displayEvent, setDisplayEvent } =
    useContext<IEventContext>(EventContext);

  function handleEventSubmit(e: any) {
    alert("closed");
    setDisplayEvent(false);
  }

  return (
    <Container
      pos="fixed"
      h="100%"
      w="100%"
      display=""
      zIndex={1}
      justifyContent="center"
      alignItems="center"
    >
      <FormControl bg="white" borderRadius="md" shadow="2xl" w="" padding="2">
        <Flex bg="white">
          <IconButton
            w="50%"
            h="100%"
            marginBottom="-2"
            colorScheme="teal"
            icon={<SearchIcon />}
            aria-label={"menu"}
          />
          <IconButton
            w="50%"
            h="100%"
            marginBottom="-2"
            aria-label={"Close Event Form"}
            colorScheme="teal"
            icon={<CloseIcon />}
            onClick={(e) => setDisplayEvent(false)}
          />
        </Flex>

        <FormLabel paddingTop="3" marginBottom="-0.5">
          {" "}
          Event{" "}
        </FormLabel>
        <Input
          variant="outline"
          width="full"
          placeholder="Event name"
          required={false}
        />

        <FormLabel paddingTop="3" marginBottom="-0.5">
          {" "}
          Description{" "}
        </FormLabel>
        <Input
          paddingTop=""
          variant="outline"
          width="full"
          placeholder="Describe your event"
          //  onChange={(e) => setEventDescription(e.target.value)}
          required={false}
        />
        <Button
          marginTop="2"
          colorScheme="cyan"
          type="submit"
          onSubmit={(e) => handleEventSubmit(e)}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default EventFormComponent;

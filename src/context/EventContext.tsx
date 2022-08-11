import { createContext } from "react";
import { IEventContext } from "../types/types.d";

/* 
Creating the needed context of what month to render instead of
passing down alot of props through components

MONTHINDEX = WHAT MONTH IS BEING RENDERED
SETMONTHINDEX = PROVIDES THE ABILITY TO SET THE MONTHINDEX
 */
const EventContext = createContext<IEventContext>({
   displayEvent: false,
   setDisplayEvent: () => {}
});

export default EventContext;

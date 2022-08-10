import { createContext } from "react";
import { IMonthContext } from "../types/types.d";

/* 
Creating the needed context of what month to render instead of
passing down alot of props through components

MONTHINDEX = WHAT MONTH IS BEING RENDERED
SETMONTHINDEX = PROVIDES THE ABILITY TO SET THE MONTHINDEX
 */
const MonthContext = createContext<IMonthContext>({
  monthIndex: 0,
  setMonthIndex: () => {},
});

export default MonthContext;

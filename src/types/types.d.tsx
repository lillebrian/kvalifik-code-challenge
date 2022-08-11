export interface datesData {
  monthData: Date[];
}

export interface IMonthContext {
  monthIndex: number;
  setMonthIndex: (props: any) => void;
}

export interface IEventContext {
  displayEvent: boolean
  setDisplayEvent: (props: boolean) => void
}

export interface IdisplayedDates {
  dates: Date[]
  year?: number
}
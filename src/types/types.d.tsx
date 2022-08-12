export interface datesData {
  monthData: Date[];
}

export interface IMonthContext {
  monthIndex: number;
  setMonthIndex: (props: any) => void;
}

export interface IEventContext {
  displayCreateEvent: boolean
  setDisplayEvent: (props: boolean) => void
  selectedDate: Date
  setSelectedDate: (props: Date) => void
}

export interface IdisplayedDates {
  dates: Date[]
  year?: number
}
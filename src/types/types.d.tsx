export interface datesData {
  monthData: Date[];
}

export interface IMonthContext {
  monthIndex: number;
  setMonthIndex: (props: any) => void;
}

export interface IdisplayedDates {
  dates: Date[]
  year?: number
}
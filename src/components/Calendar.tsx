import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { format, addDays, endOfMonth, parse, startOfMonth } from 'date-fns'
import { count } from 'console'

type Props = {
  param?: string
}

const Testdata = [
  {date: new Date(2022, 1, 14)},
  {date: new Date(2022, 1, 15)},
  {date: new Date(2022, 1, 16)},
  {date: new Date(2022, 1, 17)},
  {date: new Date(2022, 1, 18)},
  {date: new Date(2022, 1, 19)},
  {date: new Date(2022, 1, 20)},
  {date: new Date(2022, 1, 21)},
  {date: new Date(2022, 1, 22)},
  
]

interface dates {
  startOfMonth: Date
  endOfMonth: Date
  currentDay: Date
}

const allMonths = [
  "jan",
  "feb",
  "mar",
  "apr",
  "maj",
  "jun",
  "jul",
  "aug",
  "sep",
   "okt",
   "nov",
   "dec"
]

const renderDates = (datesToRender: dates) => {
  const month: Date[] = []
  const m: number = datesToRender.currentDay.getMonth()
  
  console.log("tester renderdates: \n" + m)
  console.log("printer fundet måned: " + allMonths[m])
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
  return("month")
}

const Calendar: FC<Props> = () => {
  
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [monthStartDay, setMonthStartDay] = useState<Date>(startOfMonth(currentDay));
  const [monthEndDay, setMonthEndDay] = useState<Date>(endOfMonth(currentDay));
  
  
  
  useEffect(() => {
    // setCurrentDay(new Date())
    // setMonthStartDay(startOfMonth(new Date()))
    // setMonthEndDay(endOfMonth(new Date()))
    const monthToRender: dates = {
      startOfMonth: monthStartDay,
      endOfMonth: monthEndDay,
      currentDay: currentDay
    }
    renderDates(monthToRender)
    console.log(currentDay)
    console.log(monthStartDay)
    console.log(monthEndDay)
  }, [])
  
  
  
  return (
    <Box 
      w='500px'
      bg='white'
      h='400px'
      borderRadius='13px'
      boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
      mb='10'
      display=''
      
      // justifyContent='center'
      alignItems='center'
    >
      <Box textAlign='center' fontSize='2xl'  h='10%' w='100%' bg='teal.400' color='white'>
        Calendar
      </Box>
      <Box h='90%' w='100%' bg='teal.100' color='white' overflow='hidden'>
        <SimpleGrid columns={7}>
          {Testdata.map(({date}, i) => {
            return (<Box w='100%' h='100%' bg='white' border='1px' borderColor='black' textColor='black' key={i}> {format(date,"dd/mm/yyyy")}
              </Box>);})}

        </SimpleGrid>
        {/* <Grid gridColumn='repeat(7, 1fr)' gridRow='repeat(5, 1fr)' >
         
          {console.log(Testdata[0].date)}
          {Testdata.map(({date}, i) => {return (<GridItem bg='gray.100' textColor='black' key={i}> HEJSA </GridItem>);})}
            
        </Grid> */}
      </Box>
    </Box>
  )
}

export default Calendar

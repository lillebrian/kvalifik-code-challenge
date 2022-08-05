import { Box, Grid, GridItem } from '@chakra-ui/react'
import type { FC } from 'react'
import { format, addDays } from 'date-fns'

type Props = {
  param?: string
}

const Testdata = [
  {date: new Date(2022, 1, 14)},
  {date: new Date(2022, 1, 15)},
  {date: new Date(2022, 1, 16)},
  {date: new Date(2022, 1, 17)},

]

const Calendar: FC<Props> = () => {
  return (
    <Box 
      w='500px'
      bg='white'
      h='400px'
      borderRadius='13px'
      boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
      mb='10'
      display='flex'
      overflow='hidden'
      //justifyContent='center'
      //alignItems='center'
    >
      <Box display='flex' h='10%' w='100%' bg='teal.400' color='white'>
        Calendar
      </Box>
      <Box display='flex'  bg='teal.400' color='white'>
        <Grid display='flex'>
          <GridItem></GridItem>
          <GridItem> test 2</GridItem>
          <GridItem> test 3</GridItem>
          <GridItem> test 4</GridItem>
          
          {/* {Testdata.map(date => {return (<GridItem bg='gray.100'> {date.date} </GridItem>)})} */}
            
        </Grid>
      </Box>
    </Box>
  )
}

export default Calendar

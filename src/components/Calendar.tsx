import { Box } from '@chakra-ui/react'
import type { FC } from 'react'

type Props = {
  param?: string
}

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
      justifyContent='center'
      alignItems='center'
    >
      <p>Calendar</p>
    </Box>
  )
}

export default Calendar

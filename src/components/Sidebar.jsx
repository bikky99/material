import React from 'react'
import { Box } from '@mui/system'

const Sidebar = () => {
  return (
    <Box bgcolor='skyblue' flex={1} padding={1} sx={{
      display: {xs:'none', sm:'block'},
    }} > 
      Sidebar 
    </Box>
  )
}

export default Sidebar
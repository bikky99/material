import React from 'react'
import { Box } from '@mui/system'

const Rightbar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      padding={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar
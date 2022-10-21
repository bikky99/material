import React from 'react'
import { Box } from '@mui/system'

const Feed = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={5}
      padding={1}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      Feed
    </Box>
  );
}

export default Feed
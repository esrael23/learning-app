import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <Box sx={{textAlign:'center'}}>
      <Typography variant="h5" >LOGO</Typography>
      <Typography variant='body1' >myTutor is the best online tutoring platform in the world . lorem ipsum</Typography>
      <Stack direction={'row'}>
        <FacebookIcon />

      </Stack>
      <Typography variant='body2' >myTutor is the best online tutoring platform in the world . lorem ipsum</Typography>

    </Box>
  )
}

export default Footer
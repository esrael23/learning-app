import { Container, Grid, Typography, Button, Box } from '@mui/material'
import React from 'react'
import Heroimg from '../../assets/images/wes-hicks-4-EeTnaC1S4-unsplash.jpg'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg" height={'80vh'} >
      <Grid container spacing={6} mt={4} >
        <Grid item xs="12" sm="12" md ="6" lg="6"  >
          <Typography variant="h3" mb={3}>Building Better Assignments</Typography>
          <Typography variant="subtitle1" mb={4} >implementing best pedagogical practices can be nearly impissible. We make it easy</Typography>
          <Button variant="contained"  sx={{borderRadius: '35px', fontSize:'15px'}}> getting started
            
          </Button>

        </Grid>
        <Grid item xs="12" sm="12" md ="6" lg="6">
          <Box sx={{
            
            backgroundImage: `url(${Heroimg})`,
            backgroundSize:'cover',
            height: 400,
            
            borderRadius: '5px'
          }}>

          </Box>
        

        </Grid>
        
      </Grid>
    </Container>
    </ThemeProvider>
  )
}

export default Hero
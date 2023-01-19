import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Textfild from './Textfild'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import data from './corsesData.json'

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Courses = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container id="Sourses">
       <Typography variant="h3" component={'h2'} align='center' mb={3}>find<b>online Tutor</b> in any Subdject</Typography>
       <Textfild />
      <Grid container spacing={4}>
        {data.map(data => {
          return(
<Grid item xs="12" sm="6" md="4" lg="3">
          <Card sx={{   boxShadow:10}} >
    <CardActionArea>
      <img src={data.img} align={"center" }  height={250} alt="data img"
              width= '100%'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.subtitle}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
        </Grid>
          )
        })}
        
      </Grid>

    </Container>
    </ThemeProvider>
  )
}

export default Courses
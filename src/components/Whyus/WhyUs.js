import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import data from "./Data.json"
 
const WhyUs = () => {
  return (
    <Container sx={{mt: 5, mb: 8}} id='Whyus'>
      <Typography variant="h3" component={'h2'} align='center' mb={3}>Why Us?</Typography>
      <Grid container spacing={3}>
        {data.map(item => {
          return(
            <Grid item xs="12" sm="6" md="3" key={item.id} >
  
            <Card sx={{   boxShadow:10}} >
        <CardActionArea>
         
            <img src={item.img}
                height={250}
              width= '100%'
                className="img" alt="..."/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
          </Grid>
          )
          
})}
       
      </Grid>
    </Container>
  )
}

export default WhyUs
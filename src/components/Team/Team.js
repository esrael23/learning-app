import { Avatar, Box, Card, CardContent, CardHeader, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors';
import datas from './Team.json'
const Team = () => {
  return (
<Container id='Tastimonials'>
      
      <Typography mt={6} align='center' variant="h3" >Don't take our word for it. </Typography>
      <Typography align='center' variant="h4" >Trust our costomers</Typography>
      <Grid container spacing={4} marginY={4}>
        {datas.map(data => {
          return(
<Grid item sx="12" sm="6" md="4">
        <Card>
        <CardHeader avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
R
    
          </Avatar>
        }
        title={data.title}
        subheader={data.subtitle}/>
           <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <Stack direction="row" justifyContent='end' mr={5}>
        <Box><Typography variant="subtitle1" >23rd april 2022</Typography></Box></Stack>
      </Card>
        </Grid>
          )
        })}
        
      </Grid>
      
    </Container>
  )
}

export default Team
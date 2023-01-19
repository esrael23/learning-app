import { AppBar, Box,  Stack, Toolbar, Typography, Button,Menu,MenuItem, IconButton } from '@mui/material'
import {Link} from "react-scroll"
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';


const menu = [
  { id: "1",name: 'Home'},
  {id: "2",name: 'Whyus'},
  {id: "3",name: 'Sourses'},
  {id: "4",name: 'Tastimonials'},
  {id: "5",name: 'Out team'},
  {id:  "6", name: 'Contact Us'}
]

const Header = ({check, change }) => {
  const [open, setopen] = useState(false)
  return (
    <div>
      
        <AppBar  position='static'>
        <Toolbar sx={{justifyContent: 'space-between', display: 'flex', backgroundColor: 'white', color: 'black' }}>

          <Box sx={{display:{xs: 'flex', sm: 'flex',md: 'flex', lg: 'none' }}}>
            <MenuIcon onClick={() => setopen(!open)}/>
          </Box>
        <Box>
            <Typography variant="h5" color="initial">E-learning</Typography>
          </Box>
           <Box>
            <Stack direction={'row'} spacing={5} sx={{display:{xs: 'none',sm: 'none',md: 'none', lg: 'block' } }}>
              {menu.map((item) =>(
                <Link  to={item.name} smooth={true} offset ={-40} duration={500}>{item.name}</Link>
              ))}
            </Stack>
          </Box>
          <Box>
            <Stack direction={'row'}>
              <Button variant="text" >
                sign in 
              </Button>
              <Button variant="contained"  sx={{borderRadius: '25px'}}>
                sign up
              </Button>
              <IconButton onClick={change}>
      {check ===true ? <Brightness7Icon color='primary'/> : <Brightness4Icon color='black'/>}
      </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu sx={{mt: '35px'}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setopen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width: '200px', height: "250px"}}>
          {menu.map((item) =>(
        <MenuItem >{item.name}</MenuItem>
        ))}</Box>
      </Menu>
    </div>
  )
}

export default Header
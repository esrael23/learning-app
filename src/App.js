
// import {   makeStyles,  } from '@material-ui/core'
import { CssBaseline} from '@mui/material';
import Header from './components/Header/Header';
import Portfolio from './pages/Mainpage/Mainpage';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


// const useStyles = makeStyles((theme) => ({
//  appBar:{
//  },
 
//  hero: {
//   backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0, 0.5)), url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg")',
//   height:'500px',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: "cover",
//   position: 'relativ',
//   display: 'flex',
//   alignItems: 'center',
//     justifyContent: 'center',
//   fontSize: '4rem',
//   color: '#fff',

  

//  },
//  blogsContainer: {
//   paddingTop: theme.spacing(3)
//  },
//  blogtitle: {
//   fontWeight: 800,
//   paddingBottom: theme.spacing(3)
//  }
 

// }));


function App() {
const [mode, setMode] = useState(false);

const theme = createTheme(
  {
    palette:{
      mode: mode ? 'dark' : 'light'
    }
  }
)


  return (
    <ThemeProvider theme={theme}>
<CssBaseline />

<div>
<Header check = {mode} change = {() => setMode(!mode)}/>
  <Portfolio />



</div>
</ThemeProvider>


  );
}

export default App;

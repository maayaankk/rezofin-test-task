import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Login from './SignUp';
// import MenuIcon from '@mui/icons-material/Menu';
// import { MenuIcon } from "@material-ui/icons/Menu"
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

  return (
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ 
            flexGrow: 1,
        }}>
        <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          {/* </IconButton> */} 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rezofin
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
        </Box>
        </ThemeProvider>
  );
}

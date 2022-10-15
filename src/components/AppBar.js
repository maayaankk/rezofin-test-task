import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LogOut from './LogOut';
// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

// import MenuIcon from '@mui/icons-material/Menu';
// import { MenuIcon } from "@material-ui/icons/Menu"
// import MenuIcon from '@mui/icons-material/Menu';

function ButtonAppBar(props) {
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
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.user}
          </Typography> */}

          {/* <Authenticator>
            {({ signOut, user }) => (
             <main>
                <Button color="inherit" onClick={signOut}>Sign out</Button>
             </main>
            )}
        </Authenticator> */}
        {/* <AmplifySignOut /> */}
        <LogOut />
        </Toolbar>
        </AppBar>
        </Box>
        </ThemeProvider>
  );
}

export default ButtonAppBar;

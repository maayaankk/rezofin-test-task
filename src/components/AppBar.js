import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LogOut from './LogOut';
import {CognitoJwtVerifier} from 'aws-jwt-verify';
import { Stack } from '@mui/system';

// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

// import MenuIcon from '@mui/icons-material/Menu';
// import { MenuIcon } from "@material-ui/icons/Menu"
// import MenuIcon from '@mui/icons-material/Menu';

function ButtonAppBar(props) {
  const [id, setID] = useState()
  const [email, setEmail] = useState();

  var id_token_str = window.location.hash.split("&access_token=")[0]
  var authorization_str = id_token_str.replace("#id_token=", "");

  console.log(authorization_str);

const verifier = CognitoJwtVerifier.create({
  userPoolId: "ap-south-1_24fntNvCV",
  tokenUse: "id",
  clientId: "4vs4hk0vdln7jum20sfab1gcea"
});

try {
  const payload =   verifier.verify(authorization_str)
      .then(res => {
          console.log("Token.valid. Payload: ", payload);
          console.log(res)
          console.log(res.email)
          setEmail(res.email)
      })
      .catch(err => {
          console.log(err)
      })
} catch (error) {
  // console.log(error);
  console.log("Token not valid. Error: ", error)
}
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
          {/* <Authenticator>
            {({ signOut, user }) => (
             <main>
                <Button color="inherit" onClick={signOut}>Sign out</Button>
             </main>
            )}
        </Authenticator> */}
        {/* <AmplifySignOut /> */}
        <Stack>
        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 0 }}>
            {email}
            <LogOut />
          </Typography>
        </Stack>
        </Toolbar>
        </AppBar>
        </Box>
        </ThemeProvider>
  );
}

export default ButtonAppBar;

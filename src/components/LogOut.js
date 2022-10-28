import React from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../components/UserPool';
import { Button, Link } from '@mui/material';

function LogOut() {


    const logout = () => {
        const user = Pool.getCurrentUser();
        if(user){
            user.signOut();
        }
    }

    // https://rezofin-dev.auth.ap-south-1.amazoncognito.com/logout?client_id=4vs4hk0vdln7jum20sfab1gcea&logout_uri=https://rezofin-dev.auth.ap-south-1.amazoncognito.com/login?client_id=4vs4hk0vdln7jum20sfab1gcea&response_type=token&scope=email+openid+profile&redirect_uri=http://localhost:3000/

  return (
    <div>
        {/* <a href=' https://rezofin-dev.auth.ap-south-1.amazoncognito.com/logout?client_id=4vs4hk0vdln7jum20sfab1gcea&logout_uri=https://rezofin-dev.auth.ap-south-1.amazoncognito.com/login?client_id=4vs4hk0vdln7jum20sfab1gcea&response_type=token&scope=email+openid+profile&redirect_uri=http://localhost:3000/'>Log out</a>/ */}
        <Button size='small' onClick={event => window.location.href =' https://rezofin-dev.auth.ap-south-1.amazoncognito.com/logout?client_id=4vs4hk0vdln7jum20sfab1gcea&logout_uri=https://rezofin-dev.auth.ap-south-1.amazoncognito.com/login?client_id=4vs4hk0vdln7jum20sfab1gcea&response_type=token&scope=email+openid+profile&redirect_uri=http://localhost:3000/'}>Log out</Button>

    </div>
  )
}

export default LogOut
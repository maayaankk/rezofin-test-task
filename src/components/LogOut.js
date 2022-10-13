import React from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../components/UserPool';
import { Button } from '@mui/material';

function LogOut() {

    const logout = () => {
        const user = Pool.getCurrentUser();
        if(user){
            user.signOut();
        }
    }

  return (
    <div>
        <Button onClick={logout}>Log out</Button>
    </div>
  )
}

export default LogOut
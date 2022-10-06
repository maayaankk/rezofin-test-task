import React from 'react'
import TextField from '@mui/material/TextField';
// import UserPool from '../cognito/UserPool';
import { useState } from 'react';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import {API, Auth} from 'aws-amplify';
import { Button } from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   UserPool.signUp(email, password, [], null, (err, data) => {
  //     if(err){
  //       console.error(err);
  //     }
  //     console.log(data);
  //   })
  // }
  
  return (
    <div>
      {/* <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'>Signup</button>
      </form> */}
      {/* <Authenticator>
            {({ signOut, user }) => (
             <main>
                <Button color="inherit" onClick={signOut}>Sign out</Button>
             </main>
            )}
        </Authenticator> */}
      <Button href='https://rezofin-dev.auth.ap-south-1.amazoncognito.com/login?client_id=13nsmk8s44j5lu56taeqmi6sbm&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/' >Login or Register</Button>
        
    </div>
  )
}

export default SignUp;
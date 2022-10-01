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

<<<<<<< HEAD
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   UserPool.signUp(email, password, [], null, (err, data) => {
  //     if(err){
  //       console.error(err);
  //     }
  //     console.log(data);
  //   })
  // }
=======
  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if(err){
        console.error(err);
      }
      console.log(data);
    })
  }
  
>>>>>>> f31a3fde9576f1bc37fbdff96dae4fb70f87736f
  return (
    <div>
      {/* <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'>Signup</button>
      </form> */}
<<<<<<< HEAD
=======
      {/* <Authenticator>
            {({ signOut, user }) => (
             <main>
                <Button color="inherit" onClick={signOut}>Sign out</Button>
             </main>
            )}
        </Authenticator> */}
        
>>>>>>> f31a3fde9576f1bc37fbdff96dae4fb70f87736f
    </div>
  )
}

export default SignUp;
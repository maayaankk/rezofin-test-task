import React, {useState, useContext} from 'react';
import {AccountContext} from '../components/Account'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {authenticate} = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email,password)
     .then(data => {
            console.log("Logged in!", data)
        })
     .cathc(err => {
            console.error("Failed to login", err)
        })
    // const user = new CognitoUser({
    //     Username: email,
    //     Pool: UserPool
    // });
    // const authDetails = new AuthenticationDetails({
    //     Username: email,
    //     Password: password
    // })

    // user.authenticateUser(authDetails, {
    //     onSuccess: (data) => {
    //         console.log("onSuccess: ", data);
    //     },
    //     onFailure: (err) => {
    //         console.error("onFailure: ", err);
    //     },
    //     newPasswordRequired: (data) => {
    //         console.log("newPasswprdRequired: ", data)
    //     },
    // })
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
      <label htmlFor='email'>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login;
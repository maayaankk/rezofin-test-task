import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Widget from './components/Widget';
import AppBar from './components/AppBar';
import DataFetching from './components/DataFetching';
import Form from './components/Form';
import Login from './components/Login';
import {Account, AccountContext} from './components/Account';
import Status from './components/Status';
import {FlagsProvider, Flags} from "react-feature-flags";

// import '@aws-amplify/ui-react/styles.css';

// import '@aws-amplify/ui-react/styles.css';
// import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

const flags = [
  {name: "adminOnly", isActive: true},
  {name: "vipOnly", isActive: false},
  {name: "beta-user", isActive: false},
]

function App() {
  // const [status, setStatus] = useState(true);
  // const {getSession} = useContext(AccountContext);

  // useEffect(() => {
    // getSession()
  //     .then(session => {
  //       console.log("Session: ", session);
  //       setStatus(true)
  //     })
  // })

  return (
    <>
  {/* <FlagsProvider value={flags}>
    <div >
      <Flags 
        authorizedFlags={["adminOnly"]}
        renderOn={flag => 
          <>
          <Account>
          <h1>For VIP</h1>
          <Status />
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* </Account>
          </>
        }
      /> */}
    {/* </div> */} 

    {/* {
       status ? ( */}
        {/* <div className="App"> */}
        {/* <div className='Header'> */}
        {/* <AppBar /> */}
        {/* </div> */}
        {/* <div className='App-header'> */}
         {/* <Widget />
         <DataFetching />
         <Form /> */}
        {/* </div> */}
        {/* </div> */}
       {/* ) : ( */}
      
       {/* )
    } */}
        <div>
      <Account>
        <Status />
        {/* <SignUp /> */}
        {/* <Login /> */}
      </Account>
    </div>
    </>

// </div>
  );
}

export default App;



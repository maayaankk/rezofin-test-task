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
import Spinner from './components/Spiner';
// import Footer from './components/Footer';


// import '@aws-amplify/ui-react/styles.css';

// import '@aws-amplify/ui-react/styles.css';
// import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

const flags = [
  {name: "adminOnly", isActive: true},
  {name: "vipOnly", isActive: false},
  {name: "beta-user", isActive: false},
]
function App() {
  const [loading, setLoading] = useState(true);
  // setLoading(false)

  // const {getSession} = useContext(AccountContext);

  // useEffect(() => {
    // getSession()
  //     .then(session => {
  //       console.log("Session: ", session);
  //       setStatus(true)
  //     })
  // })
  if (loading) return <Spinner />
  return (
    <>

    <div className='Header'>
    <AppBar />
    </div>
    <div className="App">
    <div className='App-header'>
    <Widget />
    {
    loading ? <Spinner/> : <DataFetching />
    }
    <Form />
    {/* <Footer /> */}
   </div>
    {/* <SignUp /> */}
   </div>
    </>

  /* <FlagsProvider value={flags}>
    <div >
      <Flags 
        authorizedFlags={["adminOnly"]}
        renderOn={flag => 
          <>
          <Account>
          <h1>For VIP</h1>
          <Status />
        {/* <SignUp /> */
        /* <Login /> */
        /* </Account>
          </>
        }
      /> */
    /* </div> */

    /* {
      //  status ? ( */
        // <div className="App">
        // <div className='Header'>
        // <AppBar />
        // </div>
        // <div className='App-header'>
        //  {/* {/* <Widget /> */}
        //  <DataFetching />
        //  <Form /> 
        // </div>
        // </div>
       /* ) : ( */
      
       /* )
    } */
        /* <div>
      <Account>
        <Status />
        {/* <SignUp /> */
        /* <Login /> */
      /* </Account> */
    /* </div> */
    // </>

// </div>

  );
}

export default App;

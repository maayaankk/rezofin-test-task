import * as React from 'react';
import { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Widget from './components/Widget';
import AppBar from './components/AppBar';
import DataFetching from './components/DataFetching';
import Form from './components/Form';
// import '@aws-amplify/ui-react/styles.css';

// import '@aws-amplify/ui-react/styles.css';
// import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <>
    <div className='Header'>
    <AppBar />
    </div>
   <div className="App">
   <div className='App-header'>
   <Widget />
    <DataFetching />
    <Form />
   </div>
    {/* <SignUp /> */}
   </div>
    </>
  );
}

export default App;



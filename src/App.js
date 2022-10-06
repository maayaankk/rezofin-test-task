import * as React from 'react';
import { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Widget from './components/Widget';
import AppBar from './components/AppBar';
import DataFetching from './components/DataFetching';
// import '@aws-amplify/ui-react/styles.css';

// import '@aws-amplify/ui-react/styles.css';
// import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
        {/* <SignUp /> */}
        <AppBar />
        <Widget />
        <DataFetching />
    </div>
  );
}

export default App;



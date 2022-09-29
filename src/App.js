import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Widget from './components/Widget';

function App() {

  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
          {!user ? (
            <Login />
          ):(
            <p>React app</p>
          )}
          <Widget />
      </header>
    </div>
  );
}

export default App;

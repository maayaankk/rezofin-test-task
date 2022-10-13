import React, {useContext, useEffect, useState} from "react";
import { AccountContext } from "./Account";
import Login from "./Login";
import Widget from "./Widget";
import AppBar from "./AppBar";
import DataFetching from "./DataFetching";
import Form from './Form';
import SignUp from "./SignUp";
import './Status.css'

const Status = () => {
    const [status, setStatus] = useState(false);
    const {getSession, logout} = useContext(AccountContext);
    const [jwtToken, setJwtToken] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session);
                console.log(session.idToken.jwtToken)
                setJwtToken(session.idToken.jwtToken)
                console.log(session.idToken.payload.email)
                setUser(session.idToken.payload.email)
                setStatus(true)
            })
    },[]);
    return(
        <div>
            {status ? (
                <div className="App">
                    <div className="Header">
                    <AppBar 
                    user={user}
                    />
                    {/* {jwtToken} */}
                    {/* {user} */}
                    </div>
                    <div className="App-header">
                    <Widget />
                    <DataFetching 
                    token={jwtToken}
                    />
                    <Form 
                    token={jwtToken}
                    />
                    </div>
                </div>
            ): (
                <div className="Login">
                    <SignUp />
                    <Login />
                </div>
            ) }
        </div>
    )
};

export default Status
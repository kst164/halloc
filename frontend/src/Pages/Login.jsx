
import './Login.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import React from 'react';
// import Grid from './Grid';
// import HomeGen from './HomeGen';
// import HomeLog from './HomeLog';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Protected from '../Protected';

function Login() {
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    setisLoggedIn(true);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
    setisLoggedIn(false);
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <h1>React Google Login App</h1>
        <div>
          {isLoggedIn ? (
            <div>
            <h3>You logged in as {loginData.email}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
          ) : (
            <GoogleLogin
              clientId={"742894497534-7ifju1knqvfussuga4kt2mlhe2o145dv.apps.googleusercontent.com"}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        </div>
      </header>
    </div>
  );
}

export default Login;
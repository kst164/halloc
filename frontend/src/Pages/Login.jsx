
import './Login.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import React from 'react';
import NavBar from '../Components/NavBar';
import { GoogleLogout } from 'react-google-login';
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
    <div className="home">
        <NavBar />
        <div className="main">
        <div className='content'>
          {isLoggedIn ? (
            <div className='sign-out-button'>
            <h3>You logged in as {loginData.email}</h3>
            <button onClick={handleLogout}>Logout</button>
            <GoogleLogout
              buttonText='Logout'
              onClick={handleLogout}
            ></GoogleLogout>
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
        
            <h3>About HALLOC</h3>
            <p>
              <em>HALLOC</em> or <em>Hostel ALLOCation</em> is designed to help
              IITH students select their Hostel rooms efficiently with minimal
              conflicts. Every student has the following options available upon
              logging in through his/her IITH email id:
            </p>

            <h4>Grid</h4>
            <p>
              The "Grid" page allows you to select and view hostel rooms
              (floor-wise). The page is refreshed on a continuous basis to
              ensure updated information is available to the student.
            </p>

            <h4>MyRoom</h4>
            <p>
              This page shows all people who have applied to be your roommate if
              you're looking for one. You can accept one of them and he/she will
              be assigned to be your roommate. Note this only works if you
              already have a room.
            </p>

            <h4>See Friends</h4>
            <p>
              This page allows you to see all people who have a room but are
              looking for a roommate. This makes it easier for people to contact
              others and become roommates.
            </p>

            <h3>The OGs</h3>
            <ol>
              <li>Kst164</li>
              <li>KG</li>
              <li>KDB17</li>
              <li>RahuGrl</li>
              <li>Magneto</li>
            </ol>
          </div>
        </div>
      </div>
  );
}

export default Login;
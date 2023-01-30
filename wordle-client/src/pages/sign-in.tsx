import React, { useEffect, useContext, useRef } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import '../css/sign-in.css';
import { UserContext } from '../providers/UserContext';

function SignIn() {
  const { setUser } = useContext(UserContext);

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const clientId = '315535657625-nro53umh3f8fetctnmrdltj0fq2vtlpl.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccessOfGoogleLogin = (res) => {
    connectUser(res.profileObj.name, res.profileObj.email);
  };

  const onFailureOfGoogleLogin = () => {
    localStorage.setItem('user', JSON.stringify([]));
    setUser([]);
    alert('Please try again to sign in!');
  };

  const onSuccessOfFormLogin = () => {
    connectUser(nameRef.current.value, emailRef.current.value);
  };

  const connectUser = (name: string, email: string) => {
    const newUser = [name, email];
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={() => onSuccessOfFormLogin()}>
            <h1>Sign In</h1>
            <div className="social-container google">
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccessOfGoogleLogin}
                onFailure={onFailureOfGoogleLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
              />
            </div>
            <span>Or</span>
            <input ref={emailRef} type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            <input ref={nameRef} type="name" placeholder="Name" required />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <img
                src="https://camo.githubusercontent.com/9633ba7687fe294301734b7516c64a92cbd756558850330837115ace9c610f3a/68747470733a2f2f692e696d6775722e636f6d2f795870526636302e706e67"
                height="70"
                alt="Wordle Logo"
              />
              <br />
              <h1>Hello, Friend!</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

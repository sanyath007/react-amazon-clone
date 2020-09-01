import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password)
     .then(res => {
      history.push("/");
    })
    .catch(err => alert(err.message));
  };
  
  const handleRegister = e => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(res => {      
      history.push("/");
     })
     .catch(err => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin} type="submit" className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our interest-Base Ads
          Notice.
        </p>
        <button onClick={handleRegister} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;

import React from 'react';

const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, 
    } = props;

    return(
        <section className="login">
          <div className="loginContainer">
              <input 
              type="text" 
              autoFocus 
              required 
              value={email} 
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <br/>
          <input 
        type="password" 
        required 
        value={password} 
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
    />
    <br/>
    <p className="errorMsg">{passwordError}</p>
    <div className="btnContainer">
        {hasAccount ? (
            <>
            <button onClick={handleLogin}> Login </button>
            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}> Register here! </span></p>
            </>
        ) : (
            <>
            <button onClick={handleSignup}> Register </button>
            <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}> Login here! </span></p>
            </>
        )}
    </div>
          </div>
        </section>
    )
};

export default Login;
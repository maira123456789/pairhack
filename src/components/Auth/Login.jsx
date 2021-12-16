import React from "react";
import { useAuth } from "../../context/authContext";
import './Login.css'

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle
  } = useAuth();
  return (
    <>
      <section className="login">
        <div className="login-container">
          <input
          placeholder="👤E-mail"
            className="auth-input"
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="error-msg">{emailError}</p>
          <input
          placeholder="🔒Password"
            className="auth-input"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="error-msg">{passwordError}</p>

          <div className="btn-container">
            {hasAccount ? (
              <>
                <button className="auth-btn" onClick={handleLogin}>
                  Login 🔑
                </button>
                <p className="auth-text">
                  Don't have account?
                  <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="auth-btn" onClick={handleSignUp}>
                  Sign up
                </button>
                <p className="auth-text">
                  Have account?
                  <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}

          </div>
          <button style={{height: '30px'}} onClick={authWithGoogle}><img width="15px" src="https://www.tunartravel.com/img/google_logo.png" alt="" /> Sign in with google </button>
        </div>
      </section>
    </>
  );
};

export default Login;

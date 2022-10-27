import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./LoginStyle/login.css"


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="main">
      <h1>Login</h1>
      {showLogin ? (
        <>
          <div>
            <LoginForm onLogin={onLogin} />
          </div>
          <div>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <SignUpForm onLogin={onLogin} />
          </div>
          <div>
            Already have an account? &nbsp;
            <button className="button" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
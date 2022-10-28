import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./LoginStyle/login.css"


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="main">
      
      {showLogin ? (
        <>
          <h1>Login</h1>
          <div>
            <LoginForm onLogin={onLogin} />
          </div>
          <div>
            Don't have an account? &nbsp;
            <button className="button" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>Signup</h1>
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
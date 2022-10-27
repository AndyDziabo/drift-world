import React, { useEffect, useState } from "react";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [toggleError, setToggleError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
        setToggleError(true);
        setTimeout(function(){
          setToggleError(false);
        },2400);
      }
    });
  }


  return (
    <div className="main-form">
      <div className="table">
        <form onSubmit={handleSubmit}>
          <table className="login-table">
            <tr>
              <td>
                <label htmlFor="username">Username</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
          </table>
          <button className="button" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className={toggleError ? "login-error" : "hide" }>{errors}</div>
        
      </div>
    </div>
  );
}

export default LoginForm;
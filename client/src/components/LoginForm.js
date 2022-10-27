import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
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
      }
    });
  }

  return (
    <div className="main-form">
      <div className="table">
        <form onSubmit={handleSubmit}>
          <table>
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
            {/* {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))} */}

            {errors ? <p>{errors}</p> : null }
          </table>
          <button type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
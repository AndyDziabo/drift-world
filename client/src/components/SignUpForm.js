import React, { useState } from "react";
import "./LoginStyle/login.css"

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("username: ", name);
    console.log("email: ", email);
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
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
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password Confirmation</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password_confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete="current-password"
                />
              </td>
            </tr>

          </table>
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            {/* {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))} */}
            {errors ? <p>{errors}</p> : null }

        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
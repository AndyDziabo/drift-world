import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Classifieds from "./Classifieds";
import Events from "./Events";
import Services from "./Services";
import Media from "./Media";
import Logo from "./Logo";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

console.log(user)
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Logo />
      <Switch>
        <Route exact path="/classifieds">
          <Classifieds />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/media">
          <Media />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
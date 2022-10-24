import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
    return (
      <div className="nav">
        <span>
          {user ? user.name : "please login"}
        </span>
        {/* <span>
        <NavLink to="/" exact>
          Home
        </NavLink>
        </span>
        <span>
        <NavLink to="/login" exact>
          Login
        </NavLink>
        </span>
        <span>
        <NavLink to="/draft" exact>
          Draft
        </NavLink>
        </span>
        <span>
        <NavLink to="/about" exact>
          About
        </NavLink>
        </span> */}
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    );
  }
  
  export default NavBar;
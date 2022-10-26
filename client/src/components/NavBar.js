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
          <NavLink to="/user" exact>
            {user ? user.name : "please login"}
          </NavLink>
        </span>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    );
  }
  
  export default NavBar;
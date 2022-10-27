import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TbArrowBigDownLines } from 'react-icons/tb';
import "./NavBarStyle/navbar.css"
import User from "./User";

function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }



    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleMenuOne = () => {
      setOpen(false);
    };
  
    return (
      <div className="nav-main">
        <div className="dropdown">
          <button onClick={handleOpen}>Welcome, {user.name} <TbArrowBigDownLines /></button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <NavLink onClick={handleMenuOne} to="/user" exact>
                  Account
                </NavLink>
              </li>
              <li className="menu-item">
                <button onClick={handleLogoutClick}>Logout</button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
  
  export default NavBar;
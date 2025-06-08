import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({isLoggedIn})
{
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <NavLink className="navbar-brand" to="/">Employee Management System</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="">Logout</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
    );
}
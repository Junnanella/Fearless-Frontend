import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <nav className="navabar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            Conference GO!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li id="new-location" className="nav-item d-none">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/locations/new"
              >
                New location
              </NavLink>
            </li>
            <li id="new-conference" className="nav-item d-none">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/conferences/new"
              >
                New conference
              </NavLink>
            </li>
            <li className="nav-item d-none">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/presentations/new"
              >
                New presentation
              </NavLink>
            </li>
            <li className="nav-item d-none">
              <NavLink className="nav-link" aria-current="page" to="/attendees">
                Attendees
              </NavLink>
            </li>
            <li className="nav-item d-none">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/attendees/new"
              >
                New Attendee
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;

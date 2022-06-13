import React from "react";

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="index.html"
            >
              Home
            </a>
          </li>
          <li id="new-location" className="nav-item d-none">
            <a
              className="nav-link"
              aria-current="page"
              href="new-location.html"
            >
              New location
            </a>
          </li>
          <li id="new-conference" className="nav-item d-none">
            <a
              className="nav-link"
              aria-current="page"
              href="new-conference.html"
            >
              New conference
            </a>
          </li>
          <li className="nav-item d-none">
            <a
              className="nav-link"
              aria-current="page"
              href="new-presentation.html"
            >
              New presentation
            </a>
          </li>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;

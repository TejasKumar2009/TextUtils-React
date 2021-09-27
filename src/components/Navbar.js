import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav id="navbar" className={`navbar navbar-expand-lg navbar-${props.mode} ${props.blueLight==="enable" ? null : "bg-"+props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextUtils
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch mx-2">
              <input
              onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                id="toggleMode"
              />
              <label className={`form-check-label text-${props.mode==="light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Enable <span className="text-capitalize">{props.mode==="light" ? "dark" : "light"}</span> Mode</label>
            </div>
            <div className="form-check form-switch mx-2">
              <input
              onClick={props.toggleBlueLight}
                className="form-check-input"
                type="checkbox"
                id="toggleBlueLight"
              />
              <label className={`form-check-label text-${props.mode==="light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Enable Blue Light Filter</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

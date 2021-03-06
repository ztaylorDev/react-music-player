import React from "react";
import App from "../App";
import Artists from "./Artists";

import './NavBar.css'

const navBar = (props) => {
  return (
      <div className="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Welcome to Muuz
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="app.js">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="app.js">
                Library
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Songs
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href={props.artists}>
                    Artists
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Albums
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default navBar;


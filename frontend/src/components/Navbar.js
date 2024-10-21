import React from "react";
import "../styles/Navbar.css";


function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Www.</h1>
      </div>

      <div className="linkspage">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Box">Blog</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Navbar;

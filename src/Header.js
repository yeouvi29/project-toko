import React from "react";
import "./sass/main.scss";
import { ReactComponent as MgGlass } from "./imgs/magnifying-glass.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Toko Gallery</h1>
        <form className="search" type="submit">
          <input
            type="text"
            className="search-bar"
            placeholder="search models"
          />
          <button className="search-button">
            <MgGlass className="search-icon" />
          </button>
        </form>
        <button className="login">Log In</button>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
export default function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>The Daily Brew</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>See All Beers</Link>
          </li>
          <li>
            <Link to={"/add-beer"}>Add a Beer</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/login"}>Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

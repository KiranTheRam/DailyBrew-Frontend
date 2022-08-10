import React, { useState, useRef, useEffect } from "react";
import Card from "../components/ui/Card";
import classes from "./LogIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SignUp() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //   Used to set focus when page first loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Makes any error disappear when the user edits either the username or pwd field
  // Them changing it is a sign they read the error and are fixing it, so no need to keep the error there
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  function submitHandler(event) {
    event.preventDefault();
    console.log(user, pwd);
    setUser("");
    setUser("");
    setSuccess(true);
  }

  return (
    <Card>
      <>
        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>Taking you to the homepage now...</p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={`${!errMsg && classes.offscreen} ${
                errMsg && classes.errMsg
              }`}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <h1>Log In</h1>

            <form className={classes.form} onSubmit={submitHandler}>
              {/* Username */}
              <div className={classes.control}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
              </div>

              {/* Password */}
              <div className={classes.control}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>

              {/* Button */}
              <div className={classes.actions}>
                <button>Log In</button>
              </div>
            </form>
            {/* <p>
        Already have an account?
        <br />
        <span>
          <Link></Link>
        </span>
      </p> */}
          </section>
        )}
        ;
      </>
    </Card>
  );
}

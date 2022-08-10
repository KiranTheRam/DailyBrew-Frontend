import React, { useState, useRef, useEffect } from "react";
import Card from "../components/ui/Card";
import classes from "./SignUp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Start with an upper or lowercase letter. Then followed by any letter or number. Min length 4 max len 24
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//   1 upper, 1 lower, 1 digit, 1 special char
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //   Used to set focus when page forst loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //   Test the username being entered against our regex to see if it is valid
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  //   Test the password being entered against our regex to see if it is valid
  //   Also test if out match password matches the original password
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  function submitHandler(event) {
    event.preventDefault();

    // A second check before submit
    if (!USER_REGEX.test(user) || !PWD_REGEX.test(pwd)) {
      setErrMsg("Invalide Entry");
      return;
    }
    console.log(user, pwd);
    setSuccess(true);
  }

  return (
    <Card>
      <p
        ref={errRef}
        className={`${!errMsg && classes.offscreen} ${
          errMsg && classes.errMsg
        }`}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Register</h1>

      <form className={classes.form} onSubmit={submitHandler}>
        {/* Username */}
        <div className={classes.control}>
          <label htmlFor="username">
            Username:
            {/* If we have a valid username, apply class valid and display a check */}
            <span
              className={`${validName && classes.valid} ${
                !validName && classes.hide
              }`}
            >
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {/* If we have a vailidName or if the username field doesn't have content yet, hide the X */}
            <span
              className={`${(validName || !user) && classes.hide} ${
                (!validName || user) && classes.invalid
              }`}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="text"
            required
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
          />
          <p
            id="uidnote"
            className={`${
              userFocus && user && !validName && classes.instructions
            } ${(!userFocus || !user || validName) && classes.offscreen}`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters. <br />
            Must begin with a letter. <br />
            Letters, numbers, underscores, hyphens are allowed. <br />
          </p>
        </div>

        {/* Password */}
        <div className={classes.control}>
          <label htmlFor="password">
            Password:
            {/* If we have a valid password, apply class valid and display a check */}
            <span
              className={`${validPwd && classes.valid} ${
                !validPwd && classes.hide
              }`}
            >
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {/* If we have a valid password or if the password field doesn't have content yet, hide the X */}
            <span
              className={`${(validPwd || !pwd) && classes.hide} ${
                (!validPwd || pwd) && classes.invalid
              }`}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
          />

          <p
            id="pwdnote"
            className={`${
              pwdFocus && pwd && !validPwd && classes.instructions
            } ${(!pwdFocus || !pwd || validPwd) && classes.offscreen}`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters. <br />
            Must include uppercase and lowercase letters, a number, and special
            character <br />
            Letters, numbers, underscores, hyphens are allowed. <br />
            Allowed special characters:
            <span aria-label="at symbol">@,</span>
            <span aria-label="exclamation point">!,</span>
            <span aria-label="hash tag">#,</span>
            <span aria-label="dollar sign">$</span>
            <br />
          </p>
        </div>

        {/* Match Password */}
        <div className={classes.control}>
          <label htmlFor="match">
            Confirm Password:
            {/* If we have a valid match, apply class valid and display a check */}
            {/* matchPwd is included here to stop the check from displaying if the Password and Confirm fields were both empty */}
            <span
              className={`${validMatch && matchPwd && classes.valid} ${
                (!validMatch || !matchPwd) && classes.hide
              }`}
            >
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {/* If we have a valid match or if the password field doesn't have content yet, hide the X */}
            <span
              className={`${(validMatch || !matchPwd) && classes.hide} ${
                (!validMatch || matchPwd) && classes.invalid
              }`}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            required
            id="match"
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="matchnote"
          />

          <p
            id="matchnote"
            className={`${matchFocus && !validMatch && classes.instructions} ${
              (!matchFocus || validMatch) && classes.offscreen
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match password field
          </p>
        </div>

        <div className={classes.actions}>
          <button
            disabled={!validName || !validPwd || !validMatch ? true : false}
          >
            Sign Up
          </button>
        </div>
      </form>
      {/* <p>
        Already have an account?
        <br />
        <span>
          <Link></Link>
        </span>
      </p> */}
    </Card>
  );
}

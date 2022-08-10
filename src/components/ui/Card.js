import React from "react";
import classes from "./Card.module.css";


export default function Card(props) {
  return (
    <div className={classes.card}>
      {/* The children is the stuff in the <Card> tags */}
      {props.children}
    </div>
  );
}

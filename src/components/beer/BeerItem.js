import React from "react";
import classes from "./BeerItem.module.css";
import Card from "../ui/Card";

export default function BeerItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <address>{props.brewerAddress}</address>
          <p>{props.tastingNotes}</p>
        </div>
      </Card>
    </li>
  );
}

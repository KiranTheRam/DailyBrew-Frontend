import React from "react";
import classes from "./BeerList.module.css";
import BeerItem from "./BeerItem";

export default function BeerList(props) {
  return (
    <ul className={classes.list}>
      {props.listOfBeers.map((beer) => (
        <BeerItem
        key={beer.beerId}
        id={beer.beerId}
        image={beer.imageUrl}
        name={beer.beerName}
        brewerAddress={beer.breweryAddress}
        tastingNotes={beer.tastingNotes}
      />
      ))}
    </ul>
  );
}

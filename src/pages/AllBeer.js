import React from "react";
import { useState, useEffect } from "react";
import BeerList from "../components/beer/BeerList";
import classes from './AllBeers.module.css'

export default function AllBeer() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBeers, setLoadedBeers] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:8080/beer/all-beer")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Create an array of beers that will be filled from API request
        const beers = [];
        for (const key in data) {
          // For each object in the data from the get request, let us assemble a beer object
          const beer = {
            id: key,
            ...data[key],
          };

          // Add a beer to the beers array
          beers.push(beer);
        }

        // Once all the beers are loaded in, the page should no longer be loading
        setIsLoading(false);

        // Change the state of loadedBeers to have the newly filled array
        setLoadedBeers(beers);
      });
  }, []);

  // This is out loading screen
  if (isLoading) {
    return (
      <section>
        <p>Loading ... </p>
      </section>
    );
  }

  return (
    <div>
      <section>
        <h1 className={classes.allBeerHeading}>All Beers</h1>
        <BeerList listOfBeers={loadedBeers} />
      </section>
    </div>
  );
}

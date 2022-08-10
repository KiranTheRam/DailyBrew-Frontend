import React from "react";
import NewBeerForm from "../components/beer/NewBeerForm";
import { useNavigate } from "react-router-dom";
import classes from './AllBeers.module.css'


export default function AddBeerPage() {
  const navigate = useNavigate();

  function addBeerHandler(beerData) {
    // Sending data to backend, or Firebase in this case
    console.log(JSON.stringify(beerData));

    fetch("http://localhost:8080/beer/new", {
      method: "POST",
      body: JSON.stringify(beerData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      // After http post is sent, replace current page with '/'.
      navigate("/");
    });
  }

  return (
    <div>
      <h1 className={classes.allBeerHeading}>Add a Beer</h1>
      <NewBeerForm onAddBeer={addBeerHandler} />
    </div>
  );
}

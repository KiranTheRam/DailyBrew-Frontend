import React from "react";
import { useRef } from "react";
import classes from "./NewBeerForm.module.css";
import Card from "../ui/Card";

export default function NewBeerForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const tastingNotesInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    // Setting the reference values to these variables AFTER the form is submitted

    const enteredName = nameInputRef.current.value;
    const enteredImageUrl = imageInputRef.current.value;
    const enteredBrewerAddress = addressInputRef.current.value;
    const enteredTastingNotes = tastingNotesInputRef.current.value;

    // Making a beer JS Object
    const beerData = {
      beerName: enteredName,
      breweryAddress: enteredBrewerAddress,
      imageUrl: enteredImageUrl,
      tastingNotes: enteredTastingNotes,
    };

    props.onAddBeer(beerData);

    // nameInputRef.current.value = null;
    // imageInputRef.current.value = null;
    // addressInputRef.current.value = null;
    // tastingNotesInputRef.current.value = null;

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Beer Name</label>
          <input type="text" required id="title" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Beer Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Brewer Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Tasting Notes</label>
          <textarea
            id="tastingNotes"
            required
            rows="5"
            ref={tastingNotesInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Beer</button>
        </div>
      </form>
    </Card>
  );
}

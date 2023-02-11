import React, { useState } from "react";
import styles from "./tripForm.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import axios from "axios";
import Router from "next/router";

const TripForm: React.FC = () => {
  const [destination, setDestination] = useState();
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const onClickHandler = () => {
    console.log(destination, date, duration, imageUrl, price, description);

    if (destination && date && duration && imageUrl && price && description) {
      const tripInfo = {
        destination: destination,
        date: date,
        duration: duration,
        imageUrl: imageUrl,
        price: price,
        description: description,
      };

      const response = axios.post(
        "https://63e3cb19619fce55d4219c6c.mockapi.io/travel/Flights",
        tripInfo
      );
      console.log("response", response);
    } else {
      alert("Fill all windows");
    }
  };

  return (
    <div className={styles.main}>
      <Input
        onChange={setDestination}
        value={destination}
        placeholder="Destination"
      />
      <Input onChange={setDate} value={date} placeholder="Date" />
      <Input onChange={setDuration} value={duration} placeholder="Duration" />
      <Input onChange={setImageUrl} value={imageUrl} placeholder="Image URL" />
      <Input onChange={setPrice} value={price} placeholder="Price" />
      <Input
        onChange={setDescription}
        value={description}
        placeholder="Add description..."
      />
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Publish" />
      </div>
    </div>
  );
};
export default TripForm;

import React from "react";
import styles from "./trip.module.css";
import Router from "next/router";

type TripType = {
  destination: string;
  imageUrl: string;
  price: number;
  description: string;
  id: string;
};

const Trip: React.FC<TripType> = ({
  destination,
  imageUrl,
  price,
  description,
  id,
}) => {
  const onClickHandler = () => {
    Router.push(`/trip/${id}`);

    console.log(id);
  };
  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} alt="trip" src={imageUrl}></img>
        <h1>{price}$</h1>
      </div>
      <div className={styles.description}>
        <h2>{destination}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
};
export default Trip;

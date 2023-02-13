import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import styles from "./trip.module.css";
import Button from "@/components/button/Button";

export async function getServerSideProps(ctx: any) {
  const { data } = await axios.get(
    ` https://63e3cb19619fce55d4219c6c.mockapi.io/travel/Flights/${ctx.query.id}`
  );
  return {
    props: {
      trip: data,
    },
  };
}

export default function TripPage({ trip: tripData }: any) {
  const [trip, setTrip] = useState<any>(tripData);

  const router = useRouter();
  console.log("id[idfaile]", router.query.id);

  return (
    <div>
      <Navbar />

      {trip && (
        <div className={styles.content}>
          <div className={styles.info}>
            <h1>{trip.destination}</h1>
            <p>{trip.description}</p>
            <h4>{trip.date}</h4>
            <h4>Duration: {trip.duration} days</h4>
            <h1>Price: {trip.price} $</h1>
            <Button
              text="Book now!"
              onClick={() => alert("Congratulations! It's a scam.")}
            />
          </div>
          <img className={styles.mainImage} src={trip.imageUrl} />
        </div>
      )}
    </div>
  );
}

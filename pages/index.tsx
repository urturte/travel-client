import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Button from "@/components/button/Button";
import Trip from "@/components/trip/Trip";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";

export async function getServerSideProps() {
  const response = await axios.get(
    "https://63e3cb19619fce55d4219c6c.mockapi.io/travel/Flights"
  );

  return {
    props: {
      trips: response.data,
    },
  };
}

export default function Home(props: any) {
  const [trips, setTrips] = useState<any>(props.trips);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.buttonWrapper}>
        <Button onClick={() => Router.push("/createTrip")} text="Create Trip" />
      </div>
      <div className={styles.tripsWrapper}>
        {trips.length === 0 ? (
          <div className={styles.emptyContainer}>
            No trips are available at the moment.
          </div>
        ) : (
          trips.map((trip: any) => {
            return (
              <Trip
                id={trip.id}
                destination={trip.destination}
                imageUrl={trip.imageUrl}
                price={trip.price}
                description={trip.description}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}

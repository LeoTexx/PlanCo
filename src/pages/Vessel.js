import React from "react";
import styles from "../styles/pages/Vessel.module.css";

export default function VesselModal(props) {
  const vessel = props.location.state;
  return (
    <div className={styles.container}>
      <h1>{vessel.name} information:</h1>
      <div className={styles.content}>
        <div>
          <p>Name: {vessel.name}</p>
          <p>Model: {vessel.model}</p>
          <p>Class: {vessel.starship_class}</p>
          <p>Manufacturer: {vessel.manufacturer}</p>
          <p>Length: {vessel.length}m</p>
          <p>Price: {vessel.cost_in_credits} credits</p>
        </div>
        <div>
          <p>Crew: {vessel.crew}</p>
          <p>Passengers: {vessel.passengers}</p>
          <p>Cargo Capacity: {vessel.cargo_capacity}</p>
          <p>Consumables: {vessel.consumables}</p>
          <p>Hyperdrive: {vessel.hyperdrive_rating}</p>
          <p>MGLT: {vessel.mglt}</p>
          <p>Atmospheric Speed:{vessel.max_atmosphering_speed}</p>
        </div>
      </div>

      <p>{vessel.pilots}</p>
    </div>
  );
}

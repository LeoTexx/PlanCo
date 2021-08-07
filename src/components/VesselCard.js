import React from "react";
import { Link } from "@reach/router";

export default function VesselCard({
  name,
  model,
  manufacturer,
  length,
  cost_in_credits,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  MGLT,
  starship_class,
  pilots,
  films,
  mglt,
}) {
  return (
    <Link
      to="/vessel"
      state={{
        name,
        model,
        manufacturer,
        length,
        cost_in_credits,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
        consumables,
        hyperdrive_rating,
        mglt,
        films,
        starship_class,
        pilots,
      }}
      style={{
        backgroundColor: "#212121",
        marginBottom: 32,
        padding: 16,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <h1>{name}</h1>
      <h3>{model}</h3>
    </Link>
  );
}

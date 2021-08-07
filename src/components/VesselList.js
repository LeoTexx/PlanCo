import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import VesselCard from "./VesselCard";

const VesselList = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  function loadVessels() {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => {
        const vessels = response.data.results;
        setList(list.concat(vessels));
      })
      .catch((error) => {
        console.error(error);
        setHasMore(false);
      });
  }

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    loadVessels();
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    hasMore && loadVessels();
  }, [page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    list !== [] && (
      <div style={{ marginTop: 64 }}>
        <div>
          {list.map((vessel) => {
            const mglt = Object.values(vessel)[11];
            return (
              <VesselCard
                name={vessel.name}
                model={vessel.model}
                manufacturer={vessel.manufacturer}
                length={vessel.length}
                cost_in_credits={vessel.cost_in_credits}
                max_atmosphering_speed={vessel.max_atmosphering_speed}
                crew={vessel.crew}
                passengers={vessel.passengers}
                cargo_capacity={vessel.cargo_capacity}
                consumables={vessel.consumables}
                hyperdrive_rating={vessel.hyperdrive_rating}
                starship_class={vessel.starship_class}
                pilots={vessel.pilots}
                films={vessel.films}
                mglt={mglt}
              />
            );
          })}

          <div className="loading" ref={loader}>
            {hasMore && <h2>Load More</h2>}
          </div>
        </div>
      </div>
    )
  );
};

export default VesselList;

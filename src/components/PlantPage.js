import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(fetchPlants, []);

  function fetchPlants() {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plantsData) => setPlants(plantsData));
  }

  const displayPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setQuery={setQuery} />
      <PlantList plants={displayPlants} />
    </main>
  );
}

export default PlantPage;

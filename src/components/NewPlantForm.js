import React, { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [formState, setFormState] = useState({});
  function handleChange(e) {
    const key = e.target.name;
    setFormState((prevState) => ({ ...prevState, [key]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formState),
    };
    fetch("http://localhost:6001/plants", config)
      .then((res) => res.json())
      .then((newPlant) => setPlants((prevState) => [...prevState, newPlant]));
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formState.name}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleChange}
          value={formState.image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleChange}
          value={formState.price}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

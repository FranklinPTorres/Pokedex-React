import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="text"
        value={city}
        onChange={updateCity}
      />
      <p>Welcome to the city of {city}</p>
    </form>
  );
}

export default PokemonCity;

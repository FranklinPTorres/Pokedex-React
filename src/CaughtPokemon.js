import React from "react";

const CaughtPokemon = (props) => {
  const [count, setCount] = React.useState([]);
  const [pokemonNameInput, setPokemonNameInput] = React.useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  // const [name , SetName] = React.useState("");
  // function getRandomPokemon() {
  //   const pokemones = [
  //     "Pikachu",
  //     "Charmander",
  //     "Charizard",
  //     "Gengar",
  //     "Meow",
  //     "Dito",
  //     "Psiduck",
  //   ];
  //   return pokemones[Math.floor(Math.random() * pokemones.length)];
  // }

  function catchPokemon() {
    setCount(count.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  //  const random = Math.floor(Math.random() * pokemones.length);
  //  console.log(random, pokemones[random]);
  //   const date = new Date().toLocaleDateString();
  return (
    <div>
      <p>
        {" "}
        Caught {count.length} pokemon's on {props.date}{" "}
      </p>
      <input
        type="text"
        placeholder="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Click me</button>

      <ul>
        {count.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;

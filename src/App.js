import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
const App = () => {

  function logWhenClicked() {
  console.log("Button was clicked!");
}
   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
   const date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Franklin's Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

// const Logo = () => {
//   const appName = "Franklin's Pokedex";
//  return (
//    <header>
//      <h1>{appName}</h1>
//      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"></img>
//    </header>
//  );
// };

// const BestPokemon = () => {
//   // eslint-disable-next-line no-unused-vars
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   return (
//     <div>
//       <p> My favorite Pokemon is Charizard</p>
//       <ul>
//         {abilities.map((item) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// const CaughtPokemon = () => {
//   const date = new Date().toLocaleDateString();
//   return <p> Caught 0 pokemon's on {date} </p>;
// };

export default App;

import React from "react";

const BestPokemon = (props) => {
  // eslint-disable-next-line no-unused-vars
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p> My favorite Pokemon is Charizard</p>
      <ul>
        {props.abilities.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};


export default BestPokemon;
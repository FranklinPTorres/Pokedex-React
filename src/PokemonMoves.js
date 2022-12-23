import React, { useEffect, useState } from "react";

// const pokemonData = null;
function PokemonMoves(props) {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        // console.log(data);
      });
  }, [props.pokemonId]);
  return (
    <div>
      {pokemonData ? (
        <>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );

  //   if (pokemonData) {
  //     return (
  //       <div>
  //         <p>{pokemonData.name}'s moves:</p>
  //         <ul>
  //           {pokemonData.moves.map((move, index) => {
  //             return <li key={index}>{move.move.name}</li>;
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //
}

export default PokemonMoves;



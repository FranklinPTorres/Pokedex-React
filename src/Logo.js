import React from "react";

const Logo = (props) => {
//   function logWhenClicked() {
//     console.log("Button was clicked!");

  return (
    <header>
      <h1 class="header" >{props.appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        alt="imageOfCharizard"
      ></img>
    </header>
  );
};

export default Logo;

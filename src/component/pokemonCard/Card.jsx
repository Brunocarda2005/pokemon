import { useState, useEffect } from "react";

export default function Card(params) {
  const [pokemon, setPokemon] = useState("");

  const pokemonElement = async () => {
    // let url = "";
    // if (params.data.pokemon.url != undefined) {
    //   // url = params.data.pokemon.url;
    // } else if (params.data.url != undefined) {
    //   // url = params.data.url;
    // }
    if (params.data.url != undefined) {
      await fetch(`${params.data.url}`)
        .then((element) => element.json())
        .then((data) => {
          setPokemon(data);
        });
    } else if (params.data.pokemon.url != undefined) {
      await fetch(`${params.data.pokemon.url}`)
        .then((element) => element.json())
        .then((data) => {
          setPokemon(data);
        });
    }
  };

  useEffect(() => {
    pokemonElement();
  }, []);

  // console.log(pokemon);
  return (
    <section
      className=""
      style={{
        color: "red",
      }}
    >
      <header>
        <h2>{pokemon.name}</h2>
      </header>
    </section>
  );
}

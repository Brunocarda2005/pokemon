import { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Card from "../pokemonCard/Card";
import {
  URL_POKEMON,
  URL_COLORS,
  URL_TYPE,
  URL_LOCATION,
  URL_ESPECIES,
} from "../api/apiRest";

export default function Main() {
  const [Pokemon, setPokemon] = useState([]);
  const Element = useRef(null);

  useEffect(() => {
    SerchPokemon({
      target: {
        id: "",
      },
    });
  }, []);



  const api = async (URL, Name, id) => {
    setPokemon([])
    await fetch(`${URL}/${Name}`)
      .then((element) => element.json())
      .then((data) => {
        switch (id) {
          case "pokemon":
            setPokemon(data.results);
            break;
          case "type":
            setPokemon(data.pokemon);
            break;
          case "color":
            setPokemon(data.pokemon_species);
            break;
          case "location":
            setPokemon(data.pokemon_species);
            break;
          case "especies":
            setPokemon(data.varieties);
            break;
          default:
            setPokemon(data.results);
            break;
        }
      });
  };

  const SerchPokemon = (e) => {
    switch (e.target.id) {
      case "pokemon":
        api(URL_POKEMON, e.target.value, e.target.id);
        break;
      case "type":
        api(URL_TYPE, e.target.value, e.target.id);
        break;
      case "color":
        api(URL_COLORS, e.target.value, e.target.id);
        break;
      case "location":
        api(URL_LOCATION, e.target.value, e.target.id);
        break;
      case "especies":
        api(URL_ESPECIES, e.target.value, e.target.id);
        break;
      default:
        api(URL_POKEMON, "");
        break;
    }
  };

  return (
    <main className="app">
      <Header setPokemon={setPokemon} action={SerchPokemon} />
      <section className="app__content" ref={Element}>
        {Pokemon.map((data) => {
          return <Card key={data} data={data} />;
        })}
      </section>
      <h1>w</h1>
    </main>
  );
}

import { useEffect, useState } from "react";
import CardPokemon from "./components/CardPokemon";

import PokemonItem from "./components/PokemonItem";
import "./styles.css";
import Copyright from "./components/Copyright/copyright";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    getPokemonData(selectedPokemon.url);
  }, [selectedPokemon.url]);

  async function getPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon"
      ).then((res) => res.json());
      setPokemons(response.results);
      setSelectedPokemon(response.results[0]);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPokemonData(url) {
    try {
      const response = await fetch(url).then((res) => res.json());
      setPokemonData(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Copyright/>
      <div className="content">
        <div className="wrapper-card-pokemon">
          {pokemonData.sprites ? (
            <CardPokemon
              imageUrl={pokemonData.sprites.front_default}
              name={pokemonData.name}
              pokemonsInfo={{
                type: pokemonData.types[0].type.name,
                weight: pokemonData.weight,
                height: pokemonData.height
              }}
            />
          ) : null}
        </div>

        <div className="wrapper-pokemon-item">
          {pokemons.map(({ name, url }) => (
            <PokemonItem
              name={name}
              selected={name === selectedPokemon.name}
              onClick={() => {
                setSelectedPokemon({ name, url });
                console.log({ name, url });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

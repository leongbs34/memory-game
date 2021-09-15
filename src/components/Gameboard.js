import React, { useEffect, useState } from 'react'
import styles from '../styles/Gameboard.module.css'
import CardGrid from './CardGrid';

function Gameboard({incrementScore, resetScore}) {
  const amountOfPokemons = 12;
  const [pokemons, setPokemons] = useState([])
  const [chosenPokemon, setChosenPokemon] = useState([])

  useEffect(() => {
    const loadPokemons = async () => {
      setPokemons(shuffleArray(await fetchPokemons(amountOfPokemons)));
    }
    loadPokemons();
  }, [])

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  const handleClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent;
    choosePokemon(pokemonName);
    setPokemons(shuffleArray(pokemons));
  }

  const choosePokemon = (pokemonName) => {
    if (!chosenPokemon.includes(pokemonName)) {
      incrementScore();
      setChosenPokemon([...chosenPokemon, pokemonName]);
    } else {
      resetScore();
      setChosenPokemon([]);
    }
  }

  const capitaliseFirstLetter = (string) => {
    return `${string.slice(0,1).toUpperCase()}${string.slice(1)}`
  }

  const fetchPokemons = async (amount) => {
    const pokemons = [];

    for (let i = 1; i <= amount; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
      const response = await fetch(pokemonUrl);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = capitaliseFirstLetter(pokemon.name);
      const image = pokemon.sprites.front_default;
      pokemons.push({id, name, image})
    }
    return pokemons;
  }

  return (
    <div className={styles.main}>
      <CardGrid pokemons={pokemons} handleClick={handleClick} />
    </div>
  )
}

export default Gameboard

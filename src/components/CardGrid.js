import React from 'react'
import styles from '../styles/CardGrid.module.css'
import Card from './Card'

function CardGrid({pokemons, handleClick}) {
  const Cards = pokemons.map((pokemon) => 
    <Card pokemon={pokemon} handleClick={handleClick} />
  )
  

  return (
    <div className={styles.grid}>
      {Cards}
    </div>
  )
}

export default CardGrid

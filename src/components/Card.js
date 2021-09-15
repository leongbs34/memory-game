import React from 'react'
import styles from '../styles/Card.module.css'

function Card({pokemon, handleClick}) {
  return (
    <div className={styles.card} onClick={handleClick} >
      <img className={styles.img} src={pokemon.image} alt={pokemon.name} />
      <p className={styles.name}>{pokemon.name}</p>
    </div>
  )
}

export default Card


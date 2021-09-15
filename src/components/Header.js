import React from 'react'
import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.item}>
        <img src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" width="35" alt="File Pokeball PNG" />
        <div>Memory Game</div> 
      </div>
    </div>
  )
}

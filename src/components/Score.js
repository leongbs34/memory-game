import React from 'react'
import styles from '../styles/Score.module.css'

export const Score = ({score, best}) => {
  return (
    <div className={styles.flex}>
      <div className={`${styles.wrapper} ${styles.green}`}>Score : {score}</div>
      <div className={`${styles.wrapper} ${styles.red}`}>Best : {best}</div>
    </div>
  )
}

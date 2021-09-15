import styles from './styles/App.module.css';
import { Header } from './components/Header';
import Gameboard from './components/Gameboard';
import {Score} from './components/Score';
import { useEffect, useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const incrementScore = () => setScore(score + 1);
  const resetScore = () => setScore(0);

  useEffect(() => {
    const updateBest = () => {
      if (score > best) {
        setBest(score);
      }
    }

    updateBest();
  }, [score])


  return (
    <>
      <Header />
      <div className={styles.main}>
        <Score score={score} best={best} />
        <Gameboard incrementScore={incrementScore} resetScore={resetScore} />
      </div>
    </>
  );
}

export default App;

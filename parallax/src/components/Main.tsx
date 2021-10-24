import { FC, memo } from 'react';
import withParallax from '../hoc/withParallax';
import styles from './Main.module.css';

type Props = {
  offsetY: number;
}

const Main: FC<Props> = ({ offsetY }: Props) => {
  return (
    <main className={styles.main}>
      <div
        className={styles.first}
        style={{
          transform: `translateY(${offsetY * 0.35}px)`,
        }}
      />
      <div
        className={styles.second}
        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
      />
      <div className={`${styles.content} ${styles.firstContent}`}>
        <h1>CATS</h1>
        <p>I love cats!</p>
        <p>I love cats!</p>
        <p>I love cats!</p>
      </div>
      <div
        className={`${styles.content} ${styles.secondContent}`}
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      >
        <h1>CATS</h1>
        <p>I love cats!</p>
        <p>I love cats!</p>
        <p>I love cats!</p>
      </div>
      <div
        className={`${styles.content} ${styles.thirdContent}`}
        style={{ transform: `translateY(-${offsetY * 0.8}px)` }}
      >
        <h1>CATS</h1>
        <p>I love cats!</p>
        <p>I love cats!</p>
        <p>I love cats!</p>
      </div>
      <div
        className={`${styles.content} ${styles.lastContent}`}
      >
        <h1>CATS</h1>
        <p>I love cats!</p>
        <p>I love cats!</p>
        <p>I love cats!</p>
      </div>
    </main>
  );
};

export default memo(withParallax(Main));

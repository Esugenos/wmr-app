import { useState } from 'preact/hooks';
import styles from './style.module.css';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className={styles.home}>
        <h1>Home</h1>
        <p>This is the home page.</p>
        <>
          <button style={{ width: 30 }} onClick={() => setCount(count - 1)}>
            -
          </button>
          <output style={{ padding: 10 }}>Count: {count}</output>
          <button style={{ width: 30 }} onClick={() => setCount(count + 1)}>
            +
          </button>
        </>
      </section>
    </>
  );
}

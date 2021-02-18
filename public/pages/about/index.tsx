import styles from './style.module.css';

interface AboutProps {
  query: string;
}

const About = ({ query }: AboutProps): JSX.Element => (
  <section className={styles.about}>
    <h1>About</h1>
    <p>A page all about this website.</p>
    <pre>{JSON.stringify(query)}</pre>
  </section>
);

export default About;

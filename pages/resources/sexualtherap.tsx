import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <div className={styles.header}>
          <nav>
            <h2 className={styles.logo}>SexEquity</h2>
            <ul>
              <li>
                {" "}
                <button className={styles.button}>
                <a href="http://localhost:3000/home">Home</a>
                </button>
              </li>
              <li>
                {" "}
                <button className={styles.button}>
                <a href="http://localhost:3000/resources/resources">
                  Resources
                </a>
                </button>
              </li>
              <li>
              <button className={styles.button}>
                {" "}
                <a href="http://localhost:3000/education/education">Education</a>
                </button>
              </li>
            </ul>
            <button className={styles.button}>
              {" "}
              <a href="http://localhost:3000/login/login"> My SexEquity</a>
            </button>
          </nav>
        </div>
        <title>Sexequity - Resources</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Sexual Therapists</a>
        </h1>

        <div className={styles.grid}>
        <p className={styles.description}>
        A sexual therapist is a person who helps people with disabilities
              learn about and enjoy their own bodies and sexuality. They may
              work with individuals or couples to explore issues related to
              intimacy and relationships, and they may use techniques like
              counseling, education, and exercises to help people with
              disabilities improve their sexual well-being.<code className={styles.code}></code>
        </p>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/lisa-geist-0018b91a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Powered by&nbsp;Schrade & Geist</p>
        </a>
      </footer>
    </div>
  );
}
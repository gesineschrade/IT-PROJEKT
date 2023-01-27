import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <div className={styles.header}>
          <nav>
          <h2> <span className= {styles.halfa}>Sex</span>
              <span className= {styles.halfb}>equity</span> </h2>
            <ul>
              <li>
                {" "}
                <a href="http://localhost:3000/home">Home</a>
              </li>
              <li>
                {" "}
                <a href="http://localhost:3000/resources/resources">
                  Resources
                </a>
              </li>
              <li>
                {" "}
                <a href="http://localhost:3000/education/education">
                  Education
                </a>
              </li>
            </ul>
            <button className={styles.button}>
              {" "}
              <a href="http://localhost:3000/login/login"> My SexEquity</a>
            </button>
          </nav>
        </div>
        <title>Sexequity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Pregnancy</a>
        </h1>
        <p className={styles.description}>
          Discover everything you want to know about sex, your body and
          relationships! <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <a href="http://localhost:3000/education/pregnancy/pregnancy1" className={styles.card}>
            <h2 className={styles.cardtext}>What is Sex?</h2>
          </a>

          <a
            href="http://localhost:3000/education/pregnancy/pregnancy2"
            className={styles.card}
          >
            <h2 className={styles.cardtext}>What are possible consequences of Sex?</h2>
          </a>

          <a
            href="http://localhost:3000/education/pregnancy/pregnancy3"
            className={styles.card}
          >
            <h2 className={styles.cardtext}>What are sexual activities?</h2>
          </a>
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

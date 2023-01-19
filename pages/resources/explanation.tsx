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
                <a href="http://localhost:3000/">Home</a>
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
          <a>What are service Providers?</a>
        </h1>

        <div className={styles.grid}>
        <p className={styles.description}>
              Service sex providers for people with disabilities are individuals
              or businesses that offer sexual services specifically to people
              with disabilities. These services may be provided in person or
              remotely, and they may include things like sensual massages,
              companionship, or other forms of sexual activity. <code className={styles.code}></code>
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
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
            </button>{" "}
          </nav>
        </div>
        <title>Sexequity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>What are possible consequences of Sex? </a>
        </h1>
        <p className={styles.description2}>
        Sex can have a variety of consequences, both physical and emotional. 
        Physically, sex can lead to unintended pregnancies and sexually transmitted infections (STIs). 
        Emotionally, sex can lead to feelings of regret, guilt, or shame if the experience was not consensual or respectful. 
        It's important to always be aware of the potential consequences of sexual activity and make informed decisions about your sexual health and well-being.
        <code className={styles.code}></code>
        </p>
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

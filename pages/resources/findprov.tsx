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
          <a>Find service providers:</a>
        </h1>

        <p><iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d77723.46550846905!2d13.2725351!3d52.4998046!3m2!1i1024!2i768!4f13.1!2m1!1ssexualtherapie%20berlin!5e0!3m2!1sde!2sde!4v1673720742051!5m2!1sde!2sde" 
        width="1000" height="650" className="border:0;" allowfullscreen=" " loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </p>
     </main>
     <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/gesine-schrade/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> Powered by&nbsp;Schrade & Geist</p>
        </a>
      </footer>

        </div>
  );
}
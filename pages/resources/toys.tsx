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
          Find <a>Sex Toys</a>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://www.satisfyer.com/de/produkte/fuer-frauen/"
            className={styles.card}
          >
            <h2> Sex Toys for Women &rarr;</h2>
            <p>
              Sexual toys for women are objects or devices that are used to
              enhance or stimulate sexual pleasure or arousal. They can be used
              by women during sexual activity with a partner or as part of solo
              sexual activity. Some examples of sexual toys for women include
              vibrators, dildos, and masturbation sleeves. It is important to
              use these toys safely and responsibly, and to follow the
              manufacturer's instructions for use.
            </p>
          </a>

          <a
            href="https://www.satisfyer.com/de/produkte/fuer-maenner/"
            className={styles.card}
          >
            <h2>Sex Toys for Men&rarr;</h2>
            <p>
              Sexual toys for men are objects or devices that are used to
              enhance or stimulate sexual pleasure or arousal. They can be used
              by men during sexual activity with a partner or as part of solo
              sexual activity. Some examples of sexual toys for men include
              masturbators, penis pumps, and prostate massagers. It is important
              to use these toys safely and responsibly, and to follow the
              manufacturer's instructions for use.
            </p>
          </a>

          <a
            href="https://www.satisfyer.com/de/produkte/fuer-paare/?p=1"
            className={styles.card}
          >
            <h2>Sex Toys for couples&rarr;</h2>
            <p>
              Sexual toys for couples are objects or devices that are used to
              enhance or stimulate sexual pleasure or arousal for both partners
              during sexual activity. These toys can be used to add variety and
              novelty to sexual experiences and can be a fun and exciting way to
              explore new sensations and activities. Some examples of sexual
              toys for couples include vibrators, dildos, and handcuffs. It is
              important to communicate openly with your partner and to follow
              the manufacturer's instructions for use when using these toys.
            </p>
          </a>
        </div>
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

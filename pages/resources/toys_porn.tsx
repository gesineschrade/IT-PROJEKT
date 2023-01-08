import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sexequity - Sex Toys & Pornos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          What are <a>Sex Toys & Pornos?</a>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://www.aktion-mensch.de/menschen-und-geschichten/aus-dem-leben/sexualassistenz"
            className={styles.card}
          >
            <h2> What are Sex Toys? &rarr;</h2>
            <p>
              Sexual toys are objects or devices that are used to enhance or
              stimulate sexual pleasure or arousal. Examples of sexual toys
              include vibrators, dildos, and anal beads. They can be used by
              individuals or couples during sexual activity or as part of solo
              sexual activity.
            </p>
          </a>

          <a href="http://localhost:3000/toys" className={styles.card}>
            <h2>Find Sex Toys&rarr;</h2>
          </a>

          <a
            href="https://www.therapie.de/psychotherapie/-schwerpunkt-/sexualtherapie/"
            className={styles.card}
          >
            <h2>What is porn?&rarr;</h2>
            <p>
              Pornography, often referred to as "porn," is a type of media that
              depicts sexual activity or sexual themes in a graphic or explicit
              manner. Pornography can take many forms, including written
              materials, photographs, films, and videos. It is generally
              intended for adults and is not suitable for children. Pornography
              is a controversial and sensitive topic, and it is important to
              approach it with respect and caution.
            </p>
          </a>

          <a
            href="https://cordis.europa.eu/article/id/174984-understanding-sexual-assistance-for-the-disabled"
            className={styles.card}
          >
            <h2>Inclusive porn&rarr;</h2>
            <p>
              Inclusive pornography, also known as ethical pornography, is a
              type of pornography that is made with the intention of being more
              inclusive and diverse. This can include featuring a range of body
              types, genders, sexual orientations, and ethnicities, as well as
              using more respectful and consensual language and imagery. The
              goal of inclusive pornography is to create a more positive and
              respectful representation of sexual activity, and to provide a
              wider range of options for viewers.
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
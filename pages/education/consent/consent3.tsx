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
      <main>
      <h1 className={styles.title}>
          <a>What is Sexual Assault?</a>
        </h1>
        <p className={styles.description2}> Sexual assault is when someone touches another person's body in a way that makes them feel scared, uncomfortable, or hurt without their consent. This could be things like touching someone's private parts, kissing them without asking, or trying to make them do something sexual that they don't want to do.<br></br><br></br>
        It's important to remember that sexual assault is never okay and it's never the victim's fault. No one has the right to touch someone else's body without their consent.<br></br><br></br>
        If someone has been sexually assaulted, it's important that they tell a trusted adult and get help. This could be a parent, teacher, or a counselor. They can help the person feel safe and get the support they need.<br></br><br></br>
        It's also important to remember that if you ever feel scared, uncomfortable, or hurt by someone's touch, it's important to get help. If you or someone you know has been sexually assaulted you can <a href="http://localhost:3000/resources/resources"> look here for further help.</a><br></br><br></br>
        In summary, Sexual assault is when someone touches another person's body in a way that makes them feel scared, uncomfortable, or hurt without their consent, it's never okay and never the victim's fault. If someone has been sexually assaulted, it's important to tell a trusted adult and get help.
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
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>On-Demand Home Service</title>
        <meta name="description" content="Nearby service finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ServiceList from "../components/ServiceList";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ serviceList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>On-Demand Home Service</title>
        <meta name="description" content="Nearby service finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ServiceList serviceList={serviceList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      serviceList: res.data,
    },
  };
};

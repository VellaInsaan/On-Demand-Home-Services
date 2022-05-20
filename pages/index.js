import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import ServiceList from "../components/ServiceList";
import styles from "../styles/Home.module.css";
import dbConnect from "../util/mongo";
import Products from "../models/Product";

export default function Home({ serviceList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>On-Demand Home Service</title>
        <meta name="description" content="Best service on you doorsteps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <ServiceList serviceList={serviceList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  await dbConnect();
  const res = await Products.find().lean();
  return {
    props: {
      serviceList: JSON.parse(JSON.stringify(res)),
      admin,
    },
  };
};

import React from "react";
import Head from "next/head";
import { Button } from "antd";
import Header from "./api/Header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Home;

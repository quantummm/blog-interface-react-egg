import React from "react";
import Head from "next/head";
import Header from "./api/Header";
import { Row, Col } from "antd";

const Detailed = () => {
  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className={styles.comm_main} type="flex" justify="center">
        <Col
          className={styles.comm_left}
          xs={24}
          sm={24}
          md={16}
          lg={16}
          xl={14}
        >
          Left
        </Col>
        <Col className={styles.comm_right} xs={0} sm={0} md={6} lg={5} xl={4}>
          Right
        </Col>
      </Row>
    </div>
  );
};

export default Detailed;

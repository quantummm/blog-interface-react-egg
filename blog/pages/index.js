import React, { useState } from "react";
import Head from "next/head";
import Header from "./api/Header";
import Author from "./api/Author";
import Advert from "./api/Advert";
import Footer from "./api/Footer";
import { Row, Col, List } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import styles from "../styles/components/index.module.css";

const Home = () => {
  const [myList, setMyList] = useState([
    {
      title: "Lorem Ipsum",
      context:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla massa. Mauris convallis odio et ante luctus blandit. Suspendisse feugiat convallis ligula, et placerat diam condimentum vel. Nam et fringilla velit. Aenean vehicula, ante nec tempor ultricies, risus metus scelerisque mauris, nec mollis ligula dui id quam. Suspendisse pharetra est ac dui molestie, ac tempus leo dapibus. Sed accumsan est sapien, a efficitur tortor placerat vitae. In convallis et arcu sit amet tristique. Aliquam neque odio, malesuada sit amet lorem sed, vestibulum luctus lectus. Pellentesque id nulla vel arcu viverra tempus. Nullam ac velit non ante efficitur convallis vitae tempor sem. Curabitur ullamcorper et tellus ultricies porttitor.",
    },
    {
      title: "Lorem Ipsum",
      context:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla massa. Mauris convallis odio et ante luctus blandit. Suspendisse feugiat convallis ligula, et placerat diam condimentum vel. Nam et fringilla velit. Aenean vehicula, ante nec tempor ultricies, risus metus scelerisque mauris, nec mollis ligula dui id quam. Suspendisse pharetra est ac dui molestie, ac tempus leo dapibus. Sed accumsan est sapien, a efficitur tortor placerat vitae. In convallis et arcu sit amet tristique. Aliquam neque odio, malesuada sit amet lorem sed, vestibulum luctus lectus. Pellentesque id nulla vel arcu viverra tempus. Nullam ac velit non ante efficitur convallis vitae tempor sem. Curabitur ullamcorper et tellus ultricies porttitor.",
    },
    {
      title: "Lorem Ipsum",
      context:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla massa. Mauris convallis odio et ante luctus blandit. Suspendisse feugiat convallis ligula, et placerat diam condimentum vel. Nam et fringilla velit. Aenean vehicula, ante nec tempor ultricies, risus metus scelerisque mauris, nec mollis ligula dui id quam. Suspendisse pharetra est ac dui molestie, ac tempus leo dapibus. Sed accumsan est sapien, a efficitur tortor placerat vitae. In convallis et arcu sit amet tristique. Aliquam neque odio, malesuada sit amet lorem sed, vestibulum luctus lectus. Pellentesque id nulla vel arcu viverra tempus. Nullam ac velit non ante efficitur convallis vitae tempor sem. Curabitur ullamcorper et tellus ultricies porttitor.",
    },
    {
      title: "Lorem Ipsum",
      context:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla massa. Mauris convallis odio et ante luctus blandit. Suspendisse feugiat convallis ligula, et placerat diam condimentum vel. Nam et fringilla velit. Aenean vehicula, ante nec tempor ultricies, risus metus scelerisque mauris, nec mollis ligula dui id quam. Suspendisse pharetra est ac dui molestie, ac tempus leo dapibus. Sed accumsan est sapien, a efficitur tortor placerat vitae. In convallis et arcu sit amet tristique. Aliquam neque odio, malesuada sit amet lorem sed, vestibulum luctus lectus. Pellentesque id nulla vel arcu viverra tempus. Nullam ac velit non ante efficitur convallis vitae tempor sem. Curabitur ullamcorper et tellus ultricies porttitor.",
    },
  ]);

  return (
    <div>
      <Head>
        <title>Home</title>
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
          <List
            header={<div>Latest Blog</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={(item) => (
              <List.Item>
                <div className={styles.list_title}>{item.title}</div>
                <div className={styles.list_icon}>
                  <span>
                    <CalendarOutlined />
                    2020-09-23
                  </span>
                  <span>
                    <FolderOutlined />
                    Video
                  </span>
                  <span>
                    <FireOutlined />
                    5349
                  </span>
                </div>
                <div className={styles.list_context}>{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className={styles.comm_right} xs={0} sm={0} md={6} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import styles from "../../styles/components/header.module.css";
import {
  HomeOutlined,
  SmileOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Row, Col, Menu } from "antd";

const Header = () => (
  <div className={styles.header}>
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      type="flex"
      justify="center"
    >
      <Col xs={18} sm={18} md={16} lg={14} xl={12}>
        <span className={styles.header_logo}>Aiden</span>
        <span className={styles.header_txt}> - Personal Blog</span>
      </Col>
      <Col xs={4} sm={4} md={8} lg={8} xl={8}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <HomeOutlined />
            Home
          </Menu.Item>
          <Menu.Item key="video">
            <YoutubeOutlined />
            Video
          </Menu.Item>
          <Menu.Item key="life">
            <SmileOutlined />
            Life
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;

import React from "react";
import "../../styles/components/header.css";
import {
  HomeOutlined,
  SmileOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Row, Col, Menu } from "antd";

const Header = () => (
  <div className="header">
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      type="flex"
      justify="center"
    >
      <Col xs={18} sm={18} md={10} lg={10} xl={10}>
        <span className="header-logo">Aiden</span>
        <span className="header-txt"> - Personal Blog</span>
      </Col>
      <Col xs={4} sm={4} md={14} lg={8} xl={6}>
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

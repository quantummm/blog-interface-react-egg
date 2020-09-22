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
      <Col span={12}>
        <Col span={12} className="header-logo">
          Aiden
        </Col>
        <Col span={12} className="header-txt">
          My Personal Blog
        </Col>
      </Col>
      <Col span={12}>
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

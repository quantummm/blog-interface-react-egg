import React from "react";
import cn from "classnames";
import styles from "../../styles/components/author.module.css";
import {
  GithubOutlined,
  TwitterOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Avatar, Divider } from "antd";

const Author = () => {
  return (
    <div className={cn(styles.author_div, styles.comm_box)}>
      <div>
        <Avatar size={100} src="#" />
      </div>
      <div className={cn(styles.author_introduction)}>
        Experienced frontend developer in Melbourne
        <Divider>Social Account</Divider>
        <Avatar size={28} className={styles.account}>
          <GithubOutlined />
        </Avatar>
        <Avatar size={28} className={styles.account}>
          <TwitterOutlined />
        </Avatar>
        <Avatar size={28} className={styles.account}>
          <WechatOutlined />
        </Avatar>
      </div>
    </div>
  );
};

export default Author;

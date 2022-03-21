import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import {
  FaHome,
  FaCogs,
  FaListAlt,
  FaOutdent,
  FaBook,
  FaStream,
  FaDatabase,
  FaLock,
  FaChartLine,
} from "react-icons/fa";
import { GrConnect } from "react-icons/gr";
import styles from "./../app.module.scss";

const { Sider } = Layout;

interface NavProps {
  isCollapsed: boolean;
  onCollapse: () => void;
}

const Nav: React.FC<NavProps> = ({ isCollapsed, onCollapse }) => {
  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      trigger={null}
      className={styles.sider}
    >
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<FaHome />}>
          <Link to="/overview">Overview</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FaCogs />}>
          <Link to="/Brokers">Brokers</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FaListAlt />}>
          <Link to="/topics">Topics</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<FaOutdent />}>
          <Link to="/consumers">Consumers</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<FaBook />}>
          <Link to="/schema-registry">Schema Registry</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<GrConnect />}>
          <Link to="/kafka-connect">Kafka Connect</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<FaStream />}>
          <Link to="/kafka-connect">Kafka Streams</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<FaDatabase />}>
          <Link to="/ksqlDB">ksqlDB</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<FaLock />}>
          <Link to="/security">Security</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<FaChartLine />}>
          <Link to="/performance">Performance</Link>
        </Menu.Item>
      </Menu>
      <Button
        className={styles["collapse-button"]}
        onClick={onCollapse}
        type="default"
      >
        {isCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
      </Button>
    </Sider>
  );
};

export default Nav;

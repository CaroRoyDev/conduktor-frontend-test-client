import React from "react";
import { Layout, Row, Col, Space } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

import {
  SwitchLanguageButton,
  LoginButton,
  LogoutButton,
  UserProfile,
} from "../../components";

import Logo from "./../../assets/img/conduktor-logo.svg";
import styles from "./../app.module.scss";

const { Header: HeaderLayout } = Layout;

const Header: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <HeaderLayout className={styles.header}>
      <Row justify="space-between" align="middle">
        <Col>
          <img src={Logo} alt="Conduktor logo" />
        </Col>
        <Col>
          <SwitchLanguageButton />
        </Col>
        <Col>
          <Space>
            <UserProfile
              pictureUrl={user?.picture}
              name={user?.name}
              isAuthenticated={isAuthenticated}
            />
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Space>
        </Col>
      </Row>
    </HeaderLayout>
  );
};

export default Header;

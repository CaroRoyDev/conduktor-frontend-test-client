import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { useAuth0 } from "@auth0/auth0-react";
import Header from "./partials/header";
import Nav from "./partials/nav";
import Footer from "./partials/footer";
import { TranslationContent as T } from "../context/multilingual.context";
import styles from "./app.module.scss";

const { Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const { isAuthenticated } = useAuth0();

  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className={styles["content-layout"]}>
        {isAuthenticated ? (
          <>
            <Nav isCollapsed={isCollapsed} onCollapse={onCollapse} />
            <Content>{children}</Content>
          </>
        ) : (
          <T contentId={"pleaseLogin"} />
        )}
      </Layout>
      <Footer />
    </Layout>
  );
};

export default AppLayout;

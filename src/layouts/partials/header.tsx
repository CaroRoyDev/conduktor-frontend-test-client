import React from "react";
import { Layout } from "antd";
import { SwitchLanguageButton } from "../../components";

const { Header: HeaderLayout } = Layout;

const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <SwitchLanguageButton />
    </HeaderLayout>
  );
};

export default Header;

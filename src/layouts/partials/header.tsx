import React from "react";
import { Layout } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

import {
  SwitchLanguageButton,
  LoginButton,
  LogoutButton,
  UserProfile,
} from "../../components";

const { Header: HeaderLayout } = Layout;

const Header: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <HeaderLayout>
      <SwitchLanguageButton />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      <UserProfile
        pictureUrl={user?.picture}
        name={user?.name}
        isAuthenticated={isAuthenticated}
      />
    </HeaderLayout>
  );
};

export default Header;

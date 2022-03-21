import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import { TranslationContent as T } from "./../../context/multilingual.context";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={() => loginWithRedirect()} type="primary" shape="round">
      <T contentId={"login"} />
    </Button>
  );
};

export default LoginButton;

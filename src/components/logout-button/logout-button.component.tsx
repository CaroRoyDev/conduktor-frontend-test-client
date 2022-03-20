import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import { TranslationContent as T } from "../../context/multilingual.context";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => logout({ returnTo: window.location.origin })}
      type="primary"
    >
      <T contentId={"logout"} />
    </Button>
  );
};

export default LogoutButton;

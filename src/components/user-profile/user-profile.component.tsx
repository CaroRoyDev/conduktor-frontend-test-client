import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TranslationContent as T } from "./../../context/multilingual.context";
interface UserProfileProps {
  pictureUrl?: string;
  name?: string;
  isAuthenticated: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({
  pictureUrl,
  name,
  isAuthenticated,
}) => {
  return (
    <span>
      <Avatar size="large" icon={<UserOutlined />} src={pictureUrl} />
      <span>{isAuthenticated ? name : <T contentId={"guest"} />}</span>
    </span>
  );
};

export default UserProfile;

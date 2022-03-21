import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TranslationContent as T } from "./../../context/multilingual.context";
import Profile from "./user-profile.styled";
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
  return isAuthenticated ? (
    <Profile>
      <Avatar size="large" icon={<UserOutlined />} src={pictureUrl} />
      <span className="user-name">
        {isAuthenticated ? name : <T contentId={"guest"} />}
      </span>
    </Profile>
  ) : null;
};

export default UserProfile;

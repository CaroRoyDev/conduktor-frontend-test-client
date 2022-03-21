import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { Button } from "antd";
import { FaSearch } from "react-icons/fa";

export interface ShowDataButtonProps {
  to: LinkProps["to"];
}

const ShowDataButtonUI: React.FC<ShowDataButtonProps> = ({ to }) => {
  return (
    <Link to={to}>
      <Button shape="circle">
        <FaSearch />
      </Button>
    </Link>
  );
};

export default ShowDataButtonUI;

import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export interface ShowDataButtonProps {
  to: LinkProps["to"];
}

const ShowDataButtonUI: React.FC<ShowDataButtonProps> = ({ to }) => {
  return (
    <Link to={to}>
      <button>
        <FaSearch />
      </button>
    </Link>
  );
};

export default ShowDataButtonUI;

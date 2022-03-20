import React from "react";
import { FaStar } from "react-icons/fa";
import StarButton from "./switch-starred-button.styled";

export interface SwitchStarredButtonProps {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isStarred: Boolean;
}

const SwitchStarredButton: React.FC<SwitchStarredButtonProps> = ({
  clickHandler,
  isStarred,
}) => {
  return (
    <StarButton onClick={clickHandler} isStarred={isStarred}>
      <FaStar />
    </StarButton>
  );
};

export default SwitchStarredButton;

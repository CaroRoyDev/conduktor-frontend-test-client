import styled, { css } from "styled-components";
import { Button } from "antd";

const common = css`
  font-size: 1.2em;
  border: none;
  background: none !important;
`;

const starred = css`
  color: #1890ff;
`;

const unstarred = css`
  color: #f0f2f5;
`;

interface StarButtonProps {
  isStarred: Boolean;
}

const StarButton = styled(Button)<StarButtonProps>(
  ({ isStarred }) => `
    ${common}
    ${isStarred ? starred : unstarred}
`
);

export default StarButton;

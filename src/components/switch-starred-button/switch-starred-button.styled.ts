import styled, { css } from "styled-components";

const common = css`
  font-size: 1.2em;
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

const StarButton = styled.button<StarButtonProps>(
  ({ isStarred }) => `
    ${common}
    ${isStarred ? starred : unstarred}
`
);

export default StarButton;

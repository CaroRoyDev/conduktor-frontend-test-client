import styled from "styled-components";

const ErrorCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex-wrap: wrap;
  text-align: center;
  font-size: 1.2rem;
  .code {
    font-weight: 700;
    font-size: 1.5em;
  }
`;

export default ErrorCard;

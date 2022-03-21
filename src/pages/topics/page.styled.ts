import styled from "styled-components";

const PageHeader = styled.header`
  padding: 1rem 2rem 0;

  .super {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.8rem;
      margin: 0;
    }

    button {
      text-transform: uppercase;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5em;
    }
  }
`;

export { PageHeader };

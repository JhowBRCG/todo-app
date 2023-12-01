import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  h1 {
    letter-spacing: 1.5rem;

    @media screen and (max-width: 425px) {
      font-size: 3rem;
    }
  }
`;

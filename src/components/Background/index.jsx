import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  background-image: url(${({ theme }) => theme.bg.desktop});
  background-repeat: no-repeat;
  background-size: 100% 40%;
  padding-inline: 1rem;
  transition: all ease-out 200ms;

  @media screen and (max-width: 768px) {
    background-image: url(${({ theme }) => theme.bg.mobile});
  }
`;

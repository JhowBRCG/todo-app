import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.7rem 2.5rem;
  background: ${({ theme }) => theme.colors.toDoBg};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 9px 10px #00000022;
  @media screen and (max-width: 425px) {
    padding: 2.4rem 2.5rem;
  }
`;

export const Length = styled.small`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textColorDarken};
`;

export const Filter = styled.ul`
  display: Flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const FilterMobile = styled.ul`
  display: none;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.toDoBg};
  padding: 2rem 2.5rem;
  margin-top: 3rem;
  box-shadow: 0 0 10px #00000022;

  button {
    font-weight: 700;
  }

  @media screen and (max-width: 425px) {
    display: flex;
  }
`;

export const ClearCompleted = styled.button`
  color: ${({ theme }) => theme.colors.textColorDarken};
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

import styled from "styled-components";

export const FilterButton = styled.button`
  color: ${({ theme }) => theme.colors.textColorDarken};
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

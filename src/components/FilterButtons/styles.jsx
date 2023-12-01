import styled from "styled-components";

export const FilterButton = styled.button`
  color: ${({ theme }) => theme.colors.textColorDarken};
  font-weight: 700;

  &.active {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

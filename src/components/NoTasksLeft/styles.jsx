import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.toDoBg};
  padding: 2rem 2.5rem;
  min-height: 284px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.checkColor};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0 0 10px #00000022;
  color: ${({ theme }) => theme.colors.textColorDarken};
`;

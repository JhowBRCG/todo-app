import styled from "styled-components";

export const SectionList = styled.section`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: ${({ theme }) => theme.colors.toDoBg};
  overflow: hidden;
  box-shadow: 0 0 10px #00000022;
`;

import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;

  button {
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 2px solid ${({ theme }) => theme.colors.checkColor};
    inset: 0;
    margin: auto auto auto 2.5rem;
    cursor: pointer;
  }

  > input {
    width: 100%;
    padding: 2.4rem 1rem;
    background: ${({ theme }) => theme.colors.toDoBg};
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: 5px;
    text-indent: 6.2rem;
    font-size: 1.8rem;
  }
`;

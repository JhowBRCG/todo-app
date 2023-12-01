import styled from "styled-components";

export const CompleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: ${({ theme, $isCompleted }) =>
    $isCompleted ? "none" : `2px solid ${theme.colors.checkColor}`};
  background: ${({ theme, $isCompleted }) =>
    $isCompleted && theme.colors.primaryColor};
  cursor: pointer;

  img {
    width: 15px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const RemoveButton = styled.button`
  display: none;
  position: absolute;
  width: 20px;
  height: 20px;
  inset: 0;
  margin: auto 2.5rem auto auto;
`;

export const ToDoList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background: ${({ theme }) => theme.colors.toDoBg};
  color: ${({ theme, $isCompleted }) =>
    $isCompleted ? theme.colors.checkedText : theme.colors.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.checkColor};
  font-size: 1.8rem;
  text-decoration: ${({ $isCompleted }) => $isCompleted && `line-through`};

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:hover {
    ${RemoveButton} {
      display: block;
    }
  }
`;

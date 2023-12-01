import * as S from "./styles";
import cross from "../../assets/images/icon-cross.svg";
import check from "../../assets/images/icon-check.svg";

export const ToDoList = ({ removeToDo, completeToDo, todo }) => {
  return (
    <S.ToDoList $isCompleted={todo.isCompleted}>
      <S.CompleteButton
        $isCompleted={todo.isCompleted}
        onClick={() => completeToDo(todo.id)}
      >
        {todo.isCompleted && <img src={check} />}
      </S.CompleteButton>
      {todo.toDoText}
      <S.RemoveButton onClick={() => removeToDo(todo.id)}>
        <img src={cross} alt="close" />
      </S.RemoveButton>
    </S.ToDoList>
  );
};

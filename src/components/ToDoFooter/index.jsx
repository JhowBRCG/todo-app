import * as S from "./styles";
import { FilterButtons } from "..";

export const ToDoFooter = ({
  toDoList,
  setFilter,
  clearCompletedToDos,
  currentFilter,
}) => {
  const uncompletedTasksCount = toDoList.filter(
    (todo) => !todo.isCompleted
  ).length;

  return (
    <>
      <S.Footer>
        <S.Length>
          {uncompletedTasksCount} item{uncompletedTasksCount !== 1 && "s"} left
        </S.Length>
        <S.Filter>
          <FilterButtons setFilter={setFilter} currentFilter={currentFilter} />
        </S.Filter>
        <S.ClearCompleted onClick={() => clearCompletedToDos()}>
          Clear Completed
        </S.ClearCompleted>
      </S.Footer>
      <S.FilterMobile>
        <FilterButtons setFilter={setFilter} currentFilter={currentFilter} />
      </S.FilterMobile>
    </>
  );
};

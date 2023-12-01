import * as S from "./styles";

export const NoTasksLeft = ({ toDoList }) => {
  const tasks = () => {
    const completedTasksCount = toDoList.filter(
      (todo) => todo.isCompleted
    ).length;
    const uncompletedTasksCount = toDoList.filter(
      (todo) => !todo.isCompleted
    ).length;

    if (toDoList.length === 0) return "No tasks available";
    if (completedTasksCount === 0) return "You have no completed tasks";
    if (uncompletedTasksCount === 0) return "You have no active tasks";
  };

  return <S.Container>{tasks()}</S.Container>;
};

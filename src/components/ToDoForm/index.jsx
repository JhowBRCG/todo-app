import * as S from "./styles";

export const ToDoForm = ({ toDo, setTodo, addToDo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toDo) return;

    addToDo();

    setTodo("");
  };

  return (
    <S.Form action="" onSubmit={handleSubmit}>
      <button aria-label="add task" />
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => setTodo(e.target.value)}
        value={toDo}
      />
    </S.Form>
  );
};

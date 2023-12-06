import * as S from "./styles";
import { useState, useEffect } from "react";
import { ToDoForm, ToDoList, ToDoFooter, NoTasksLeft } from "..";
import { Reorder } from "framer-motion";

export const ToDo = () => {
  const storedToDoList = JSON.parse(localStorage.getItem("todoList"));
  const [toDoList, setToDoList] = useState(storedToDoList || []);
  const [filter, setFilter] = useState("all");
  const [toDo, setToDo] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const addToDo = () => {
    const newToDos = [
      ...toDoList,
      {
        id: Math.floor(Math.random() * 10000),
        toDoText: toDo,
        isCompleted: false,
      },
    ];

    setToDoList(newToDos);
  };

  const removeToDo = (id) => {
    setToDoList((current) =>
      current.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const completeToDo = (id) => {
    setToDoList((prevList) => {
      return prevList.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    });
  };

  const filteredToDos = toDoList.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.isCompleted;
    if (filter === "uncompleted") return !todo.isCompleted;
    return true;
  });

  const clearCompletedToDos = () => {
    setToDoList((prevList) => {
      return prevList.filter((todo) => {
        return !todo.isCompleted;
      });
    });
  };

  return (
    <>
      <ToDoForm toDo={toDo} setTodo={setToDo} addToDo={addToDo} />
      <S.SectionList>
        <Reorder.Group values={toDoList} onReorder={setToDoList}>
          {filteredToDos.map((todo) => (
            <Reorder.Item axis="y" key={todo.id} value={todo}>
              <ToDoList
                todo={todo}
                completeToDo={completeToDo}
                removeToDo={removeToDo}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        {filteredToDos.length === 0 && <NoTasksLeft toDoList={toDoList} />}
      </S.SectionList>
      <ToDoFooter
        toDoList={toDoList}
        setFilter={setFilter}
        clearCompletedToDos={clearCompletedToDos}
        currentFilter={filter}
      />
    </>
  );
};

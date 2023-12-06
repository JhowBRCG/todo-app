import * as S from "./styles";
import { useState, useEffect } from "react";
import { ToDoForm, ToDoList, ToDoFooter, NoTasksLeft } from "..";
import { Reorder } from "framer-motion";

export const ToDo = () => {
  const storedToDoList = JSON.parse(localStorage.getItem("todoList"));
  const [toDoList, setToDoList] = useState(storedToDoList || []);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(toDoList);
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

  useEffect(() => {
    if (filterStatus === "uncompleted") {
      return setFilteredTasks(toDoList.filter((todo) => !todo.isCompleted));
    } else if (filterStatus === "completed") {
      return setFilteredTasks(toDoList.filter((todo) => todo.isCompleted));
    }
    return setFilteredTasks(toDoList);
  }, [toDoList, filterStatus]);

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
        <Reorder.Group values={filteredTasks} onReorder={setFilteredTasks}>
          {filteredTasks.map((todo) => (
            <Reorder.Item axis="y" key={todo.id} value={todo}>
              <ToDoList
                todo={todo}
                completeToDo={completeToDo}
                removeToDo={removeToDo}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        {filteredTasks.length === 0 && <NoTasksLeft toDoList={toDoList} />}
      </S.SectionList>
      <ToDoFooter
        toDoList={toDoList}
        setFilter={setFilterStatus}
        clearCompletedToDos={clearCompletedToDos}
        currentFilter={filterStatus}
      />
      <S.ReorderText>Drag and drop to reorder list</S.ReorderText>
    </>
  );
};

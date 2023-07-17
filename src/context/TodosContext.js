import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
const TodoContext = React.createContext();

function RenderContext({ children }) {

  const {
    item: todos,
    save: saved,
    error: err,
    load: loading,
  } = useLocalStorage("TODOS_V2", []);
  
  
  let [searchValue, SetSearchValue] = React.useState("");
  let [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter((task) => task.completed).length;

  const searchedTodos = todos.filter((todo) =>
    todo.nametask.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  

  function addTodo (text) {
    const newtodos = [...todos];
    newtodos.push({
      nametask : text,
      completed : false
    })
    saved(newtodos);
  }

  function completeTask(id) {
    const newtodos = [...todos];
    const miIndex = newtodos.findIndex((index) => index.nametask === id);
    console.log(miIndex);
    newtodos[miIndex].completed = true;
    saved(newtodos);
  }

  

  function deleteTask(id) {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((index) => index.nametask === id);
    console.log(indexTodo);
    newTodos.splice(indexTodo, 1);
    saved(newTodos);
  }

  const totalTodos = todos.length;
  return (
    <TodoContext.Provider
      value={
        {
        completedTodos,
        totalTodos,
        searchValue,
        SetSearchValue,
        loading,
        err,
        searchedTodos,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        addTodo
        }
      }
    >
      {children}
    </TodoContext.Provider>
  );
}

export { RenderContext, TodoContext };

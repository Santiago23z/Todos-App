import React from "react";
import { TodoContext } from "../context/TodosContext.js";
import { SearchContent } from "../components/Search.jsx";
import { TitlleTodo } from "../components/TittleTodo.jsx";
import { ListTodos } from "../components/ListTodos.jsx";
import { ItemTodo } from "../components/ItemTodo.jsx";
import { AddTask } from "../components/ButtonAdd.jsx";
import { PortalModal } from "../modals/PortalModal.js";
import { Add } from "../components/AddTask.jsx";

export function AppUI() {
  const {
          loading,
          err,
          searchedTodos,
          completeTask,
          deleteTask,
          openModal
  } = React.useContext(TodoContext)
  return (
    <div className="App">
      <TitlleTodo />
      <SearchContent />
          <ListTodos>
          {loading && <p>Estamos cargando....</p>}
          {err && <p>Hubo un error</p>}
          {!loading && searchedTodos.length === 0 && (
            <p style={{ color: "red" }}>NO hay TOdos, crea uno</p>
          )}
          {searchedTodos.map((task) => (
            <ItemTodo
              key={task.nametask}
              name={task.nametask}
              completed={task.completed}
              check={() => completeTask(task.nametask)}
              delete={() => deleteTask(task.nametask)}
            />
          ))}
        </ListTodos>
      <AddTask />
      {openModal && 
        <PortalModal>
          <Add />
        </PortalModal>
      }
      
    </div>
  );
}

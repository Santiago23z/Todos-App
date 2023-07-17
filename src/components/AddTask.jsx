import React from "react";
import { TodoContext } from "../context/TodosContext";

const Add = () => {
    let [newTodo,  setNewTodo] = React.useState('')
    const {
        openModal,
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext)

    

    function valueSubmit (e) {
        setNewTodo(e.target.value)
    }

    function OnSubmit (eve) {
        eve.preventDefault()
        addTodo(newTodo)
        console.log(newTodo);
        setOpenModal(!openModal)
    }

    
  return (
    <div className="containerTask">
      <form onSubmit={valueSubmit}>
        <h1>Add your task</h1>
        <div className="textinput">
          <textarea placeholder="Add your task here!" id="fieldTe" value={newTodo} onChange={valueSubmit}></textarea>
        </div>
        <div className="buttons" >
        <input type="submit" id="ToDelete" value='Add' onClick={OnSubmit}/>
        <input type="button" id="ToAdd" value='Cancel' onClick={() => {
            setOpenModal(!openModal)
        }}/>
        </div>
      </form>
    </div>
  );
};

export { Add };

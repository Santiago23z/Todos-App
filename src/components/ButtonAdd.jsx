import React from 'react'
import '../styles/ButtonStyles.css'
import { IoIosAddCircle } from 'react-icons/io'
import { TodoContext } from '../context/TodosContext'

export function AddTask () {
    const { 
        openModal,
        setOpenModal
     } = React.useContext(TodoContext)
    const handleAddTask = () => {
        setOpenModal(!openModal)
    }
    return (
        <>
            <button className="buttonAdd" onClick={handleAddTask}><IoIosAddCircle></IoIosAddCircle></button>
        </>
    )
}
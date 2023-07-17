import { TodoContext } from '../context/TodosContext'
import React from 'react'
import '../styles/Title.css'
export function TitlleTodo () {
    const { completedTodos, totalTodos } = React.useContext(TodoContext)
    return (
        <h1 className="tittleTodo">Has completed <strong className='completed'>{completedTodos}</strong> of <strong className='total'>{totalTodos}</strong> TODOS</h1>
    )
}
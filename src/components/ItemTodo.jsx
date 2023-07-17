import React from 'react'
import '../styles/ItemTodo.css'
import { BsCheck } from 'react-icons/bs'
import { BsCheckAll } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
export function ItemTodo (props) {
    let [icon, setIcon] = React.useState(<BsCheck/>)

    function handleCheck () {
        setIcon(<BsCheckAll/>)
        props.check()
    }
    return (
        <>
            <li className="itemList">
                <span className={`Icon Icon-check ${props.completed && `Icon-check-Active`}`} onClick={handleCheck}>{icon}</span>
                <span className={`InfoTasks ${props.completed && `TasksCompletedSpan`}`}>{props.name}</span>
                <span className="Icon Icon-delete" onClick={props.delete}><IoMdClose></IoMdClose></span>
            </li>
        </>
    )
}
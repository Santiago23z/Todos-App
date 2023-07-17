import React from 'react';
import '../styles/SearchInput.css'
import { TodoContext } from '../context/TodosContext';

export function SearchContent (props) {
    const { searchValue, SetSearchValue } = React.useContext(TodoContext)
    return (
        <>
            <input type="text" placeholder="Write anything else" value={searchValue} className="searchInput" onChange={(e) => {
                SetSearchValue(e.target.value)
            }}/>
        </>
    )
}
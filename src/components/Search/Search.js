import React, { useState, useCallback } from 'react'
import { filterUsers } from 'actions'
import { useSelector, useDispatch } from 'react-redux'
import './Search.scss'

const Search = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const onChange = useCallback((e) => {
        const inputValue = e.target.value
        setSearchText(inputValue)
        dispatch(filterUsers(inputValue))
    })
    return (
        <form className="form-inline">
            <input className="search-users-input form-control mr-sm-2" 
                   type="search" 
                   placeholder="Search by name" 
                   aria-label="Search" 
                   value={searchText}
                   onChange={onChange}
            />
        </form>
    )
}

export default Search
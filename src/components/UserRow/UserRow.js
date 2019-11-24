import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { selectUser } from 'actions'
import './UserRow.scss'

const UserRow = ({ user }) => {
    const dispatch = useDispatch()
    const clickUserHandler = useCallback(() => {
        dispatch(selectUser(user.login.uuid))
    })
    return (
        <tr key={user.login.uuid} className="user-row" onClick={clickUserHandler}>
            <td>
                <img src={user.picture.thumbnail} 
                    className="rounded"
                    alt="User picture" 
                    width="48" 
                    height="48" />
                </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.login.username}</td>
            <td>{user.email}</td>
        </tr>
    )
}

export default UserRow
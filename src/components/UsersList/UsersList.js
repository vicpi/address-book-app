import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { scrollAtTheBottomOfThePage, loadInitialUsers } from 'actions'
import './UsersList.scss'

function UsersList(props) {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const onScroll = useCallback(() => {
        const threshold = 500
        const bodyHeight = document.body.offsetHeight
        const scrollPosition = window.visualViewport.pageTop + window.visualViewport.height
        if (bodyHeight - scrollPosition < threshold) {
            // load next 50 users
            dispatch(scrollAtTheBottomOfThePage())
        }
    })
    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    })
    useEffect(() => {
        dispatch(loadInitialUsers())
    }, [])
    return (
        <div className="row">
            <table className="users-table table">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.login.username}>
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
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList
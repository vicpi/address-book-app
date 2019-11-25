import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { scrollAtTheBottomOfThePage, loadInitialUsers } from 'actions'
import Loading from 'components/Loading/Loading'
import UserRow from 'components/UserRow/UserRow'
import useEndOfCatalog from 'hooks/useEndOfCatalog'
import './UsersList.scss'

function UsersList() {
    console.log('UsersList')
    const users = useSelector(state => state.users)
    const allUsers = useSelector(state => state.allUsers)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()
    const onScroll = useCallback(() => {
        const threshold = 800
        const bodyHeight = document.body.offsetHeight
        const scrollPosition = window.visualViewport.pageTop + window.visualViewport.height
        if (bodyHeight - scrollPosition < threshold) {
            // load next batch of users
            dispatch(scrollAtTheBottomOfThePage())
        }
    })
    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    useEffect(() => {
        if (allUsers.length === 0) {
            dispatch(loadInitialUsers())
        }
    }, [])
    const isEndOfCatalog = useEndOfCatalog()
    return (
        <>
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
                            <UserRow key={user.login.uuid} user={user} />
                        ))}
                    </tbody>
                </table>
            </div>
            {loading ? <Loading /> : null}
            {isEndOfCatalog() ? <p className="row end-catalog">End of users catalog</p> : null}
        </>
    )
}

export default UsersList
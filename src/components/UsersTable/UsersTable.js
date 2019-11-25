import React from 'react'
import { useSelector } from 'react-redux'
import { scrollToTheBottomOfThePage } from 'actions'
import Loading from 'components/Loading/Loading'
import UserRow from 'components/UserRow/UserRow'
import './UsersTable.scss'
import useEndOfCatalog from 'hooks/useEndOfCatalog'
import { useLoadInitialUsers } from 'hooks/useLoadInitialUsers'
import { useScrollToTheBottom } from 'hooks/useScrollToTheBottom'

function UsersTable() {
    useLoadInitialUsers()
    useScrollToTheBottom(scrollToTheBottomOfThePage)
    const isEndOfCatalog = useEndOfCatalog()
    const users = useSelector(state => state.users)
    const loading = useSelector(state => state.loading)
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

export default UsersTable
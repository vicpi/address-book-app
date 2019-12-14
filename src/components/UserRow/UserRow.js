import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { selectUser } from 'actions'
import './UserRow.scss'

/**
 * UserRow component represents a row in the users table.
 * Should be used in conjunction with the UsersTable component.
 * 
 * @param {Object} props
 * @returns {React.Element}
 */
const UserRow = React.memo(({ user }) => {
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
})

UserRow.propTypes = {
    // Object representing the user
    user: PropTypes.shape({
        // Login data
        login: PropTypes.shape({
            // Unique identifier of the user
            uuid: PropTypes.string.isRequired,
            // Username
            username: PropTypes.string.isRequired
        }),
        // Picture data about the user
        picture: PropTypes.shape({
            // User picture thumbnail
            thumbnail: PropTypes.string
        }),
        // Data about user's name
        name: PropTypes.shape({
            // Firstname
            first: PropTypes.string.isRequired,
            // Lastname
            last: PropTypes.string.isRequired
        }),
        // Email
        email: PropTypes.string
    })
}

export default UserRow
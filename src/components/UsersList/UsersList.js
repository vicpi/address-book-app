import React from 'react'
import './UsersList.scss'

function UsersList(props) {
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
                    {props.users.map(user => (
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
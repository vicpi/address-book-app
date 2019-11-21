import React from 'react'

function UsersList(props) {
    return (
        <div className="row">
            <table class="table">
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
                        <tr className="align-items-center">
                            <td>
                                <img src={user.picture.thumbnail} 
                                    className="rounded"
                                    alt="User picture" 
                                    width="48" 
                                    height="48" />
                                </td>
                            <td className="align-items-center">{user.name.first}</td>
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
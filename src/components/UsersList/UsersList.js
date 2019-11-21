import React from 'react'

function UsersList(props) {
    return (
        <div className="row">
            <table className="table">
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
                            <td className="align-middle">
                                <img src={user.picture.thumbnail} 
                                    className="rounded"
                                    alt="User picture" 
                                    width="48" 
                                    height="48" />
                                </td>
                            <td className="align-middle">{user.name.first}</td>
                            <td className="align-middle">{user.name.last}</td>
                            <td className="align-middle">{user.login.username}</td>
                            <td className="align-middle">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList
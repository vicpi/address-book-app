import React, { useState, useEffect } from 'react'
import Header from 'components/Header/Header'
import UsersList from 'components/UsersList/UsersList'
import './HomePage.scss'

function HomePage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://randomuser.me/api/?nat=ch,es,fr,gb&results=50&inc=name,location,nat,email,picture,phone,cell,login`)
            .then(response => response.json())
            .then(data => {
                setUsers(data.results)
                console.log(data);
            })
    }, [])
    return (
        <>
            <Header />
            <div className="container">
                {users.length > 0 
                    ? <UsersList users={users} /> 
                    : null
                }
            </div>
        </>
    )
}

export default HomePage
import React, { useState, useEffect } from 'react'
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
        <div className="container">
            <header className="header row">
                <h1>Header</h1>
            </header>
            <section className="search row">
                Users search
            </section>
            {users.length > 0 ? <UsersList users={users} /> : null}
            <footer className="footer row">
                Footer
            </footer>
        </div>
    )
}

export default HomePage
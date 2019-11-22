import React from 'react'
import Header from 'components/Header/Header'
import UsersList from 'components/UsersList/UsersList'
import './HomePage.scss'

function HomePage() {
    return (
        <>
            <Header />
            <div className="container">
            <UsersList />
            </div>
        </>
    )
}

export default HomePage
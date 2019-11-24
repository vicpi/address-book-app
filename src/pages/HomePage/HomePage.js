import React from 'react'
import Header from 'components/Header/Header'
import UsersList from 'components/UsersList/UsersList'
import UserDetailsModal from 'components/UserDetailsModal/UserDetailsModal'
import './HomePage.scss'

function HomePage() {
    return (
        <>
            <Header />
            <div className="container">
                <UsersList />
                <UserDetailsModal />
            </div>
        </>
    )
}

export default HomePage
import React from 'react'
import Header from 'components/Header/Header'
import UsersTable from 'components/UsersTable/UsersTable'
import UserDetailsModal from 'components/UserDetailsModal/UserDetailsModal'
import './HomePage.scss'

function HomePage() {
    return (
        <>
            <Header />
            <div className="container">
                <UsersTable />
                <UserDetailsModal />
            </div>
        </>
    )
}

export default HomePage
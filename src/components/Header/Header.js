import React from 'react'
import './Header.scss'

const Header = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mr-3">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="search-users-input form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search" />
                </form>
            </nav>
    )
}

export default Header
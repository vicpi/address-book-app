import React from 'react'
import Search from 'components/Search/Search'
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
                <Search />
            </nav>
    )
}

export default Header
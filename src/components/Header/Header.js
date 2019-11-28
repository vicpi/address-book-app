import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Search from 'components/Search/Search'
import './Header.scss'

const Header = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/settings" exact>Settings</NavLink>
                    </li>
                </ul>
                {props.showSearch ? <Search /> : null}
            </nav>
    )
}

Header.propTypes = {
    showSearch: PropTypes.bool
}

export default Header